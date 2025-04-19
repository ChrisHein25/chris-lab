import json


def lambda_handler(event, context):
    return {
        "statusCode": 200,
        "headers": {
            "Content-Type": "application/json"
        },
        "body": json.dumps({
            "wordCount": 42,
            "message": "This is a mock word count."
        })
    }
