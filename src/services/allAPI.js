

import { commomAPI } from "./commonAPI"
import { serverUrl } from "./serverUrl"

//uploading a video
 export const uploadVideo = async (reqBody) => {
     //make  POST http request to "http://localhost:4000/videos" to add video to json server and return response add component

     return await commomAPI("POST",`${serverUrl}/videos`,reqBody)
}

//get all videos from json server
export const getAllVideo = async () => {
    //make get http request to "http://localhost:4000/videos" to  get all video from json server to view component 

    return await commomAPI("GET",`${serverUrl}/videos`,"")
}
 
//get a video from json server
export const getAVideo = async (id) => {
    //make get http request to "http://localhost:4000/videos" to  get all video from json server to view component 

    return await commomAPI("GET",`${serverUrl}/videos/${id}`,"")
}

//remove video from json server
export const deleteVideo = async (id) => {
    //make get http request to "http://localhost:4000/videos" to  get all video from json server to view component 

    return await commomAPI("DELETE", `${serverUrl}/videos/${id}`,{})
    
}


//store watch history in json server
export const addToHistory = async (videoDetails) => {
    //make  POST http request to "http://localhost:4000/videos" to add watchhistory to the json server and return response to videocard
    return await commomAPI("POST",`${serverUrl}/history`,videoDetails)
    
}
//get all watching video history
export const getAllHistory = async () => {
    //make get http request to "http://localhost:4000/videos" to  get all video watchhistory from json server to watchhistory component 
    return await commomAPI("GET",`${serverUrl}/history`,"")
}

//delete watching video history
export const deleteHistory = async (id) => {
    //make delete http request to "http://localhost:4000/videos" to  delete video  from json server to watchhistory 
    return await commomAPI("DELETE",`${serverUrl}/history/${id}`,{})
}


//add category to json server
export const addCategory = async (reqBody) => {
    //    //make  POST http request to "http://localhost:4000/categories" to add video to the json server and return response to category cpmponent
    return await commomAPI("POST",`${serverUrl}/categories`,reqBody)
}
//get all categroy  from json sever
export const getAllCategory = async () => {
        //make get http request to "http://localhost:4000/categories" to  get all video  from json server to retun response category component 
        return await commomAPI("GET",`${serverUrl}/categories`,"")
}
//delete  category from json sever
export const deleteCategory = async (id) => {
    //make delete http request to "http://localhost:4000/categories" to  get all video from json server and return  response category component 

    return await commomAPI("DELETE", `${serverUrl}/categories/${id}`,{})
    
}

//update category from json server
export const updateCategory = async (id,body) => {
    //make update http request to "http://localhost:4000/categories" to  update particular category to json server and return  response category component 

    return await commomAPI("PUT", `${serverUrl}/categories/${id}`,body)
    
}

