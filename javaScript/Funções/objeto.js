// Object Destructuring

const user = {
    id: 42,
    displayName: 'MJ',
    fullName: {
        firstName: 'Moisés',
        lastName: 'Júnior'
    }
};

function userId({id}) {
    return id;
}

function getFullName({fullName: {firstName: first, lastName: last}}) {
    return `${first} ${last}`;
}

console.log(userId(user));

console.log(getFullName(user));