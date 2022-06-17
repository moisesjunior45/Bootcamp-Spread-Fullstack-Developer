const usuarios = new Map();
usuarios.set('Luiz', 'Admin');
usuarios.set('Moisés', 'Admin');
usuarios.set('João', 'User');
usuarios.set('Rebeca', 'User');

function getAdmins(map) {
    let admins = [];

    for ([key, value] of map) {
        if(value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

console.log(getAdmins(usuarios));