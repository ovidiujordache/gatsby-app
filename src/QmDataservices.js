import http from "./realm.json";
class QmDataService{
    getAll(page = 0){
        return http.get(`customers?page=${page}`);
    }

    get(id){
        return http.get(`/id/${id}`);
    }

    find(query, by="name", page = 0){
        return http.get(`customers?${by}=${query}&pages=${page}`);
    }
}