from fastapi.testclient import TestClient
import json

import mock_api

client = TestClient(mock_api.app)

print('\n== GET /health ==')
resp = client.get('/health')
print(resp.status_code)
print(json.dumps(resp.json(), indent=2, ensure_ascii=False))

print('\n== GET /models ==')
resp = client.get('/models')
print(resp.status_code)
print(json.dumps(resp.json(), indent=2, ensure_ascii=False))

print('\n== POST /analyze ==')
payload = {
    "claim_text": "A method comprising: receiving data; processing the data; outputting results.",
    "description": "A machine learning system that processes data using neural layers.",
    "style": "technical",
    "model_name": "mock",
    "use_mock": True,
    "index_path": "",
    "num_prior_art": 3,
    "retriever_type": "automatic"
}
resp = client.post('/analyze', json=payload)
print(resp.status_code)
print(json.dumps(resp.json(), indent=2, ensure_ascii=False))
