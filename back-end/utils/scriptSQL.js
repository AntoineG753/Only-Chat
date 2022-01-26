
// USERS 

exports.sqlAuthUuid = (uuid) => {
    return `SELECT uuid FROM user WHERE uuid = "${uuid}"`
};

exports.sqlCheckPseudo = (pseudo) => {
    return `SELECT pseudo FROM users WHERE pseudo='${pseudo}'`;
};

exports.sqlSignup = (pseudo, secretKey, uuid) => {
    return `INSERT INTO users  (pseudo, secretKey, uuid) VALUES ("${pseudo}", "${secretKey}", "${uuid}")`;
};

exports.sqlGetAccount = (uuid) => {
    return `SELECT * FROM users WHERE uuid = '${uuid}'`
}

exports.sqlLogin = (pseudo) => {
    return `SELECT * FROM users WHERE pseudo = '${pseudo}'`
};

exports.sqlNumberLogin = (number_connections, uuid) => {
    return `Update users SET number_connections = '${number_connections}'  WHERE uuid = '${uuid}'`
};





