<template>
    <div class="newProfileContainer">
        <div class="formDesc">
            <img class="logo" src="../assets/graphics/logo-small.svg" alt="AirBean logo">
            <h1 class="heading">Välkommen till AirBean-familjen!</h1>
            <p>Genom att skapa ett konto nedan kan du spara och se din orderhistorik.</p>
        </div>

        <form class="form">
            <label for="name">Namn</label>
            <input v-model="name" class="textInput" type="text" name="name">

            <label for="email">Email</label>
            <input v-model="email" class="textInput" type="email" name="email">
            <div class="radioInput">
                <input class="radioButton" type="radio" name="gdpr" v-model="gdpr" :value="true">
                <label for="gdpr" class="radioLabel">GDPR Ok!</label>
            </div>
        </form>
        <NewProfileButton @click.native="addUser" />
    </div>
</template>

<script>
import NewProfileButton from '../components/NewProfileButton'
export default {
    name: 'NewProfile',
    components: {
        NewProfileButton
    },
    data() {
        return {
            name: '',
            email: '',
            gdpr: false
        }
    },
    methods: {
        inputCheck(inputfield) {
            if(inputfield != '' || inputfield === true) {
                return true;
            } else {
                return false;
            }
        },
        validateInput() {
            let message = {
                nameSuccess: this.inputCheck(this.name),
                emailSuccess: this.inputCheck(this.email),
                gdprSuccess: this.inputCheck(this.gdpr)
            }

            return message;
        },
        async sendUserData() {
            let payloadBody = {
                uuid: this.$store.state.uuid,
                name: this.name,
                email: this.email
            }
            console.log(payloadBody);
            const orderUrl = "http://localhost:5000/api/beans/user";
            fetch(orderUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payloadBody)
            })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    console.log('User was added to database');
                } else {
                    console.log('Error: could not add user to database');
                }
            })
            .catch(error => {
              console.error("Error:", error);             
            });
        },
        addUser() {
            let message = this.validateInput();
            console.log(message);
            if(message.nameSuccess === true && message.emailSuccess === true && message.gdprSuccess === true) {
                
                this.$store.dispatch('createUuid').then(()=>( 
                    this.sendUserData() 
                ))
                console.log('Success');
            } else {
                console.log('Error');
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .newProfileContainer {
        background: $pink;
        height: 85vh;
        position: absolute;
        bottom: 0;
        padding: 2rem 1rem;
        margin: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-family: 'Work Sans', sans-serif;
        color: $brown;
        border-radius: 0.5rem;
        box-shadow: 0 0 5px rgba(#000000, 0.5);

        .formDesc {
            display: flex;
            flex-direction: column;

            .logo {
                margin-bottom: 0.5rem;
            }

            .heading {
                font-family: 'PT Serif', serif;
                font-size: 2rem;
                margin-bottom: 0.5rem;
            }
        }

        .form {
            display: flex;
            flex-direction: column;

            label {
                font-size: 0.75rem;
                text-align: left;
                margin-bottom: 0.2rem;
            }

            .textInput {
                padding: 1rem;
                border-radius: 0.5rem;
                border: 1px solid $brown;
                background: none;
                margin-bottom: 1rem;
                font-family: 'Work Sans', sans-serif;
                color: $brown;
                font-size: 1rem;
            }
            .radioInput {
                display: flex;
            }
        }
    }

</style>