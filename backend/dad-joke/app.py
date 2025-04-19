import os
import json
import requests


def lambda_handler(event, context):
    try:
        # Get the API URL from the environment variable
        api_url = os.environ.get('API_URL', 'https://icanhazdadjoke.com/')

        # Log the API URL to ensure it's correct
        print(f"API URL: {api_url}")

        # Make the GET request to the dad joke API
        response = requests.get(api_url, headers={'Accept': 'application/json'})

        # Check if the response was successful
        if response.status_code == 200:
            return {
                'statusCode': 200,
                'body': json.dumps({
                    'joke': response.json().get('joke', 'No joke found')
                })
            }
        else:
            # Return an error if the status code is not 200
            return {
                'statusCode': response.status_code,
                'body': json.dumps({
                    'error': 'Failed to fetch dad joke'
                })
            }
    except Exception as e:
        # Log the error for debugging purposes
        print(f"Error: {str(e)}")

        # Handle any exceptions that occur during the process
        return {
            'statusCode': 500,
            'body': json.dumps({
                'error': f'Error fetching dad joke: {str(e)}'
            })
        }
