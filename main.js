const user = "matheus7gs"

function getGithubUserInfos() {
   const url = `https://api.github.com/users/${user}`

   fetch(url).then(response => response.json()).then(data => {
      userName.textContent = data.name
      userImage.src = data.avatar_url
      userFollowers.textContent = data.followers
      userFollowing.textContent = data.following
      userRepository.textContent = data.public_repos
      userCompany.textContent = data.company ? data.company : "no company"
      userLocation.textContent = data.location ? data.location : "no eddress"
      pageTitle.textContent = `${data.name} | RocketCard`
   })
  
}

getGithubUserInfos()

const colors = [
   '',
   'blue',
   'red',
   'cyan',
   'orange',
   '#988BC7',
   '#44475a',
   '#483C67',
   '#191622',
]

let position = 0

function changeBackground() {
   document.getElementById('card-background').style.backgroundColor = colors[position]
   
   if (position < colors.length -1) {
      position = position + 1
   } else {
      position = 0;
   }
}