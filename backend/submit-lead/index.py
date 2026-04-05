import json
import os
import base64
import uuid
import psycopg2


def handler(event: dict, context) -> dict:
    """Сохраняет заявку (имя + email + опциональное изображение) в таблицу leads. Изображение загружается в S3."""
    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    body = json.loads(event.get('body') or '{}')
    name = (body.get('name') or '').strip()
    email = (body.get('email') or '').strip()
    image_base64 = body.get('image_base64')
    image_name = body.get('image_name') or 'image.jpg'

    if not name or not email:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Имя и email обязательны'})
        }

    image_url = None
    if image_base64:
        import boto3
        image_data = base64.b64decode(image_base64)
        ext = image_name.rsplit('.', 1)[-1].lower() if '.' in image_name else 'jpg'
        content_type_map = {'jpg': 'image/jpeg', 'jpeg': 'image/jpeg', 'png': 'image/png', 'webp': 'image/webp', 'gif': 'image/gif'}
        content_type = content_type_map.get(ext, 'image/jpeg')
        key = f"leads/{uuid.uuid4()}.{ext}"

        s3 = boto3.client(
            's3',
            endpoint_url='https://bucket.poehali.dev',
            aws_access_key_id=os.environ['AWS_ACCESS_KEY_ID'],
            aws_secret_access_key=os.environ['AWS_SECRET_ACCESS_KEY']
        )
        s3.put_object(Bucket='files', Key=key, Body=image_data, ContentType=content_type)
        image_url = f"https://cdn.poehali.dev/projects/{os.environ['AWS_ACCESS_KEY_ID']}/bucket/{key}"

    conn = psycopg2.connect(os.environ['DATABASE_URL'])
    cur = conn.cursor()
    cur.execute(
        "INSERT INTO leads (name, email, image_url) VALUES (%s, %s, %s) RETURNING id",
        (name, email, image_url)
    )
    lead_id = cur.fetchone()[0]
    conn.commit()
    cur.close()
    conn.close()

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'success': True, 'id': lead_id})
    }
