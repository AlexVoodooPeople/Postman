{
	"info": {
		"_postman_id": "34b7817e-e45d-488f-a79f-bd5b3df07796",
		"name": "Group_31_HW",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "20528800"
	},
	"item": [
		{
			"name": "EP_1",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "162.55.220.72:5005/get_method?name=DD&age=39",
					"host": [
						"162",
						"55",
						"220",
						"72"
					],
					"port": "5005",
					"path": [
						"get_method"
					],
					"query": [
						{
							"key": "name",
							"value": "DD"
						},
						{
							"key": "age",
							"value": "39"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "EP_2",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "formdata",
					"formdata": [
						{
							"key": "name",
							"value": "Kevin",
							"type": "text"
						},
						{
							"key": "age",
							"value": "28",
							"type": "text"
						},
						{
							"key": "salary",
							"value": "1000",
							"type": "text"
						}
					]
				},
				"url": {
					"raw": "162.55.220.72:5005/user_info_3",
					"host": [
						"162",
						"55",
						"220",
						"72"
					],
					"port": "5005",
					"path": [
						"user_info_3"
					]
				}
			},
			"response": []
		},
		{
			"name": "EP_3",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "162.55.220.72:5005/object_info_1?name=Mike&age=33&weight=70",
					"host": [
						"162",
						"55",
						"220",
						"72"
					],
					"port": "5005",
					"path": [
						"object_info_1"
					],
					"query": [
						{
							"key": "name",
							"value": "Mike"
						},
						{
							"key": "age",
							"value": "33"
						},
						{
							"key": "weight",
							"value": "70"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "EP_4",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "162.55.220.72:5005/object_info_2?name=Lucy&age=35&salary=2500",
					"host": [
						"162",
						"55",
						"220",
						"72"
					],
					"port": "5005",
					"path": [
						"object_info_2"
					],
					"query": [
						{
							"key": "name",
							"value": "Lucy"
						},
						{
							"key": "age",
							"value": "35"
						},
						{
							"key": "salary",
							"value": "2500"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "EP_5",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "162.55.220.72:5005/object_info_3?name=Sandra&age=25&salary=800",
					"host": [
						"162",
						"55",
						"220",
						"72"
					],
					"port": "5005",
					"path": [
						"object_info_3"
					],
					"query": [
						{
							"key": "name",
							"value": "Sandra"
						},
						{
							"key": "age",
							"value": "25"
						},
						{
							"key": "salary",
							"value": "800"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "EP_6",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "162.55.220.72:5005/object_info_4?name=John&age=40&salary=3500",
					"host": [
						"162",
						"55",
						"220",
						"72"
					],
					"port": "5005",
					"path": [
						"object_info_4"
					],
					"query": [
						{
							"key": "name",
							"value": "John"
						},
						{
							"key": "age",
							"value": "40"
						},
						{
							"key": "salary",
							"value": "3500"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "EP_7",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "formdata",
					"formdata": [
						{
							"key": "name",
							"value": "Jennifer",
							"type": "text"
						},
						{
							"key": "age",
							"value": "28",
							"type": "text"
						},
						{
							"key": "salary",
							"value": "1500",
							"type": "text"
						}
					]
				},
				"url": {
					"raw": "162.55.220.72:5005/user_info_2",
					"host": [
						"162",
						"55",
						"220",
						"72"
					],
					"port": "5005",
					"path": [
						"user_info_2"
					]
				}
			},
			"response": []
		}
	]
}