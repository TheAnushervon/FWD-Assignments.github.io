
<div id="contact">
    <div class="container">
      <div class="row">
        <div class="contact-left">
          <h1 class="sub-title" style="color: red;">Contact Me</h1>
          <p><i class="fa fa-solid fa-square-phone"></i> +7 937 042 2187</p>
          <div class="social-icons">
            <a href="https://t.me/the_anushervon"><i class="fa fa-brands fa-telegram"></i></a>
            <a href="mailto:anushervon4j@gmail.com"><i class="fa fa-solid fa-envelope"></i></a>
            <a href="https://github.com/TheAnushervon"><i class="fa fa-brands fa-github"></i></a>
          </div>
        </div>
        <div class="contact-right">
          <form bind:this={form} on:submit|preventDefault={handleSubmit}>
            <input type="text" name="Name" placeholder="Your name" required />
            <input type="email" name="Email" placeholder="Your email" required />
            <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
            <button type="submit" class="btn btn2">Submit</button>
          </form>
          <span id="msg">{message}</span>
        </div>
      </div>
    </div>
    <div class="copyright">
      <p>© 2024 Anushervon Qodirzoda. All rights reserved.</p>
      <h3>
        <a href = "">Other Assignments' solution</a>
      </h3>
    </div>
  </div>
  
  <style>
    @import url('../app.css');
  </style>
  
  <script lang="ts">


    import { onMount } from 'svelte';
  import Assignments from './Assignments.svelte';
  
    let message = '';
    let form: HTMLFormElement | null = null;
  
    const scriptURL =
      'https://script.google.com/macros/s/AKfycbzPRqoTLuz28So_EIGaInyVozQFMdUNXjon5gYjI2czBMqilNed27pSVzSUTj6fvVwodA/exec';
  
    onMount(() => {
      form = document.querySelector('form');
    });
  
    function handleSubmit() {
      if (form) {
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
          .then((response) => {
            message = "Message sent successfully!";
            form.reset();
            setTimeout(() => {
              message = '';
            }, 5000);
          })
          .catch((error) => console.error('Error!', error.message));
      }
    }
  </script>
<!-- <Assignments />  -->