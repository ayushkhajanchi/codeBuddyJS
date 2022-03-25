// level {2}


  let getUsers = async () => {
    var userProfile = {
      user: await getUser(),
      profile: await getProfile(),
      posts: await getPosts()
    };
    return userProfile;
  }



