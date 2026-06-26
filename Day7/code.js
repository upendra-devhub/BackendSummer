//Promises


function getUser(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(101);
        },2000)
    })
}

function getPosts(userId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(35234);
        },2000)
    })
}

function getLikes(postId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(210);
        },2000)
    })
}


//chain my promises

// getUser()
//     .then(userID=>getPosts(userID))
//         .then(postId=>getLikes(postId))
//             .then(likes=>console.log(`${likes}`))
//                 .catch(err=>console.log(err));


async function displayLikes(){

    try{
        const uId= await getUser();
        const pId=await getPosts(uId);
        const likes=await getLikes(pId);
        console.log(`${likes}`)
    }catch(err){
        console.log(err)
    }
}

displayLikes();