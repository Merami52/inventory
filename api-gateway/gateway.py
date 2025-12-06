from fastapi import FastAPI, Request, HTTPException
from fastapi.responses import JSONResponse
import httpx
import asyncio
from typing import Dict, Any

app = FastAPI(title="API Gateway", description="API Gateway for StoreAdmin microservices", version="1.0.0")

# Service registry - in production this would be a service discovery mechanism
SERVICES = {
    "auth": "http://localhost:8001",
    "users": "http://localhost:8001",
    "products": "http://localhost:8002", 
    "orders": "http://localhost:8003",
    "customers": "http://localhost:8004",
    "categories": "http://localhost:8005"
}

async def forward_request(service_name: str, path: str, request: Request):
    """Forward request to the appropriate microservice"""
    if service_name not in SERVICES:
        raise HTTPException(status_code=404, detail=f"Service {service_name} not found")
    
    service_url = f"{SERVICES[service_name]}{path}"
    
    # Get request data
    body = await request.body()
    headers = dict(request.headers)
    
    # Remove hop-by-hop headers
    headers.pop("host", None)
    headers.pop("connection", None)
    
    async with httpx.AsyncClient() as client:
        try:
            response = await client.request(
                method=request.method,
                url=service_url,
                headers=headers,
                content=body,
                params=request.query_params
            )
            return JSONResponse(
                status_code=response.status_code,
                content=response.json() if response.content else None,
                headers=dict(response.headers)
            )
        except httpx.RequestError as e:
            raise HTTPException(status_code=503, detail=f"Service {service_name} unavailable: {str(e)}")

@app.get("/")
async def gateway_root():
    return {"message": "API Gateway for StoreAdmin", "services": list(SERVICES.keys())}

@app.get("/health")
async def gateway_health():
    return {"status": "healthy", "services": SERVICES}

# Route for auth service
@app.api_route("/auth/{path:path}", methods=["GET", "POST", "PUT", "DELETE", "PATCH"])
async def auth_service(path: str, request: Request):
    return await forward_request("auth", f"/auth/{path}", request)

# Route for users service
@app.api_route("/users/{path:path}", methods=["GET", "POST", "PUT", "DELETE", "PATCH"])
async def users_service(path: str, request: Request):
    return await forward_request("users", f"/users/{path}", request)

# Route for products service
@app.api_route("/products/{path:path}", methods=["GET", "POST", "PUT", "DELETE", "PATCH"])
async def products_service(path: str, request: Request):
    return await forward_request("products", f"/products/{path}", request)

# Route for orders service
@app.api_route("/orders/{path:path}", methods=["GET", "POST", "PUT", "DELETE", "PATCH"])
async def orders_service(path: str, request: Request):
    return await forward_request("orders", f"/orders/{path}", request)

# Route for customers service
@app.api_route("/customers/{path:path}", methods=["GET", "POST", "PUT", "DELETE", "PATCH"])
async def customers_service(path: str, request: Request):
    return await forward_request("customers", f"/customers/{path}", request)

# Route for categories service
@app.api_route("/categories/{path:path}", methods=["GET", "POST", "PUT", "DELETE", "PATCH"])
async def categories_service(path: str, request: Request):
    return await forward_request("categories", f"/categories/{path}", request)