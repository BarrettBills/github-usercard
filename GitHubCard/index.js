import axios from "axios";
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

followersArray.forEach(follower => {
  useGitUserCard(follower);
})

function useGitUserCard(username){
  axios.get(`https://api.github.com/users/${username}`)
    .then(res => {
      document.querySelector('.cards').appendChild(gitUserCard(res.data));
    })
    .catch(err => {
    console.error(err);
    })
}

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/


/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
function gitUserCard(data) {
  const gitCard = document.createElement('div');
  const image = document.createElement('img');
  const cardInfo = document.createElement('div');
  const name = document.createElement('h3');
  const userName = document.createElement('p');
  const userLocation = document.createElement('p');
  const profile = document.createElement('p');
  const profileLink = document.createElement('a');
  const userFollower = document.createElement('p');
  const userFollowing = document.createElement('p');
  const userBio = document.createElement('p');

  gitCard.classList.add('card');
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  userName.classList.add('username');

  name.textContent = data.name;
  userName.textContent = data.login;
  userLocation.textContent = `Location: ${data.location}`;
  profile.textContent = "Profile: ";
  profileLink.textContent = "Link here";
  userFollower.textContent = `Followers: ${data.followers}`;
  userFollowing.textContent = `Following: ${data.following}`;
  userBio.textContent = `Bio: ${data.bio}`;

  image.src = data.avatar_url;
  image.alt = "GitHub user";

  profileLink.href = data.html_url;

  gitCard.appendChild(image);
  gitCard.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(userLocation);
  cardInfo.appendChild(profile);
  profile.appendChild(profileLink);
  cardInfo.appendChild(userFollower);
  cardInfo.appendChild(userFollowing);
  cardInfo.appendChild(userBio);

  return gitCard;
}
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
