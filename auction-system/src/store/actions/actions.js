export default class Action {

static signin = "SIGNIN"
static signup = "SIGNUP"
static signout = "SIGNOUT"
static get = "GET"
static post = "POST"
static buyings = "BUYINGS";
static update = "UPDATE"

static Signin(data){
    return {
        type:this.signin,
        data:data
    }
}
static Signup(data){
    return{
        type:this.signup,
        data:data
    }
}
static Signout(){
    return{
        type:this.signout,
        data:null
    }
}
static Post(data){
return {
    type: this.post,
    data:data
}
}
static Get(data){
    return{
    type:this.get,
    data:data
    }

}
static Buyings(data){
    return{
        type:this.buyings,
        data:data
    }
}
static Update(data){
    return{
        type:this.update,
        data:data
    }
}
}
