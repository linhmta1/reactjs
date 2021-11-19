export function mappingPostData(post){ 
    return{
        id : post.id,
        title: post.title.rendered,
        author: post.author_data.nickname,
        date: post.date,
        slug : post.slug,
        categories: post.categories,
    }
}
export function mappingCategoryList(data){ 
    let dataArray = []
    data.forEach(element => {
        dataArray[element.id] = element
    });
    return dataArray;
}

export function mappingCurentUser(user){
    return {
        id: user.id,
        nickname: user.nickname,
        email: user.email,
        userName: user.user_name,
        avatar: user.avatar_urls['96']
    }
}

