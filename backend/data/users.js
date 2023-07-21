import bcrypt from 'bcrypt'

const users=[
    {
        name:'Admin User',
        email:'admin@email.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin:true
    },
    {
        name:'John Cena',
        email:'wannabeadmin@email.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin:false
    },
    {
        name:'manjeet verma',
        email:'manjeet@email.com',
        password:bcrypt.hashSync('12314456',10),
        isAdmin:false
    },
]

export default users;