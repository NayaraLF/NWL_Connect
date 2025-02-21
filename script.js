//

const app= document.getElementById('app');
const users = [
    {
        email: 'test@test.com',
        phone: '44999999999',
        ref: 100,
        refBy: null
    },
    {
        email: 'tust@tust.com',
        phone: '44999999999',
ref: 200,
refBy: 100
    }
];
const getUser = (userData) => {
    return users.find((user) => {
        return user.email == userData.email;
    });
}

const showInvite = (userData) => {
    app.innerHTML = `
    <input type="text" id="link" value="htpps://evento.com?ref=${userData.ref}" disabled>  
    <div id="stats">
        <h4>80</h4>
        <p>Inscrições feitas</p>
    </div>
    `;
    }
    
const formAction = () =>{
    const form = document.getElementById('form');
    form.onsubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const userData = {
            email: formData.get('email'),
            phone: formData.get('phone'),
           }


        const user = getUser(userData);
        if (user) {
            showInvite(user);
            } else {
            
        }
     }
}

const startApp = () => {
    formAction();
}
startApp();

