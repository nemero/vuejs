export const response = {
	"config": { 
		"transformRequest": {}, 
		"transformResponse": {}, 
		"timeout": 0, 
		"xsrfCookieName": "XSRF-TOKEN", 
		"xsrfHeaderName": "X-XSRF-TOKEN", 
		"maxContentLength": -1, 
		"headers": { 
		"Accept": "application/json", 
		"Content-Type": "application/json;charset=utf-8", 
		"Bearer": "Bearer <token>" 
		}, 
		"method": "post", 
		"baseURL": "http://localhost/api/v1/", 
		"url": "http://localhost/api/v1/login", 
		"data": "{\"email\":\"\"}" 
	}, 
	"request": {
		"data": {
			"success": "Success Request"
		}
	}
}