const data = [
{
    name: 'John Doe',
    age: 32,
    gender: 'male',
    lookingfor: 'female',
    location: 'Florida ', 
    image: 'https://randomuser.me/api/portraits/men/82.jpg'
},

{

    name: 'Jen Smith',
    age: 26,
    gender: 'femlae',
    lookingfor: 'male',
    location: 'los angeles',
    image: 'https://randomuser.me/api/portraits/women/82.jpg'
},

{

    name: 'william j', 
    age: 38,
    gender: 'male',
    lookingfor: 'female',
    location: 'Texas',
    image: 'https://randomuser.me/api/portraits/women/84.jpg'
}

];

const profiles = profileIterator(data); 

// nextProfile(); // to see the first profile manullay use this

// Next Event
document.getElementById('next').addEventListener('click', nextProfile);

// Next Profile Display
function nextProfile() {
    const currentProfile = profiles.next().value;
    
    if(currentProfile !== undefined){
    document.getElementById('profileDisplay').innerHTML = `
        <ul class = "list-group">
            <li class = "list-group-item">Name : ${currentProfile.name}</li>
            <li class = "list-group-item">Age : ${currentProfile.age}</li>
            <li class = "list-group-item">Location : ${currentProfile.location}</li>
            <li class = "list-group-item">Preferences : ${currentProfile.gender} looking for ${currentProfile.lookingfor}
            </li>
        </ul>    
    `;

    document.getElementById('imageDisplay').innerHTML= `<img src = "${currentProfile.image}">`;
    } else {
        // No more profiles
        window.location.reload();
    }
}


// Profile Iterator
function profileIterator(profiles){
    let nextIndex = 0;

    return {
        next : function() {
            return nextIndex < profiles.length ? 
            { value : profiles[nextIndex++], done: false} : 
            { done : true }
        }
    };
}