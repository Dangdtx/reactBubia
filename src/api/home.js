import http from "@utils/http";

//home http://touch.m.dangdang.com/index.php?floor_pageid=162262_0&seq=0&action=index_floor&preview_time=0
export const home_api = ()=>http.get("index.php?floor_pageid=162262_0&seq=0&action=index_floor&preview_time=0")