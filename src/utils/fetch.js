
class API {
	// Mmethod for get. <noTokenRequired>
	async get (url) {
		const result = await fetch(url);
		const responseData = await result.json();
		return responseData;
	}
	// Method for get. <token_required>
	async get_token (url, userToken) {
		const result = await fetch(url,{
			method : 'GET',
			headers : {
				'token_key': `${userToken}`
			}
		});
		const responseData = await result.json();
		return responseData;
	}
	// Method for post
	async login (url, data) {
		const result = await fetch (url, {
			method : 'POST',
			headers : {
				'Content-type' : 'application/json'
			},
			body : JSON.stringify(data)
		});

		const responseData = await result.json();
		return responseData;
	}
	// Method for post. <token_required>
	async post (url, data, userToken) {
		const result = await fetch (url, {
			method : 'POST',
			headers : {
				'Content-type' : 'application/json',
				'token_key': `${userToken}`
			},
			body : JSON.stringify(data)
		});
		const responseData = await result.json();
		return responseData;
	}
	// Method for put.
	async update (url, data, userToken) {
		const resp = await fetch (url, {
			method: 'PUT',
			headers: {
				'content-Type': 'application/json',
				'token_key': `${userToken}`
			},
			body: JSON.stringify(data)
		});
		const response = await resp.json()
		return response
	}
	// Method for delete
	async delete (url, userToken) {
		const response = await fetch ( url, {
			method : 'DELETE',
			headers : {
				'Content-type' : 'application/json',
				'token_key': userToken
			}
		});
		const requestRes = await response.json();
		return requestRes;
	}
}

export default API;
