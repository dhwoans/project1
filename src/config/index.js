function required(key, defaultValue = undefined) {
  const value = process.env[key] || defaultValue;
  if (value == null) {
    throw new Error(`Key ${key} is undefined`);
  }
  return value;
}

// 사용할 vue 파일에서 import config 한다음에 config.api.baseUrl 이런식으로 사용하면 됩니다@@@@
export const config = {
  api: {
    baseUrl: required("VUE_APP_BASE_URL", "http://localhost:80"),
    houseDealUrl:
      "http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTradeDev",
    houseDealKey: required("VUE_APP_HOUSE_DEAL_API_KEY"),
    kakaoMapKey: required("VUE_APP_KAKAO_MAP_API_KEY"),
  },
};
