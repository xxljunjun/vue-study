import axios from "axios"; //引入axios
const instance = axios.create({
	timeout: 300000,
});


// let baseURL = process.env.BASE_URL.toString();
//这里根据自己项目接口的位置自行设定
let baseURL = "https://jsonplaceholder.typicode.com/";


instance.defaults.baseURL = baseURL; //baseURL用于自动切换本地环境接口和生产环境接口
instance.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded;charset=UTF-8";
instance.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
instance.defaults.withCredentials = false; // 携带cookie
//上传附件axios接口封装
const upload = {
	uploadFile(url, payload, cancelToken, cd) {
		return instance({
			url: url,
			method: "post",
			data: payload,
			onUploadProgress: function (progressEvent) {
				if (progressEvent.lengthComputable) {
					cd(progressEvent);
				}
			},
			cancelToken: cancelToken,
		});
	},
}
export {
	upload,
	axios,
}