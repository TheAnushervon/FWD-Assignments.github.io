
<div class = "container"> 
    <nav>
        <ul>
            <li><a href ="#header">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contancts</a></li>                    
        </ul>
    </nav>
    <div class = "header-text">
        <p>BACKEND DEVELOPER</p>
        <h1>Hi, I'm <span>Qodirzoda Anushervon</span><br>from Innopolis University</h1>
    </div>
</div>
<style>
    .container {
  padding: 10px, 20%;
}

nav {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  text-align: right;
}

nav ul li {
  display: inline-block;
  list-style: none;
  margin: 20px 40px;
}

nav ul li a {
  color : black;
  text-decoration: none;
  font-size: 18px;
  position: relative;
}

nav ul li a::after {
  content: '';
  width: 0%;
  height: 3px;
  background: red;
  position: absolute;
  left: 0;
  bottom: -6px;
  transition:0.5s;
}

nav ul li a:hover::after{
  width: 100%;
}

.header-text p {
  color: black;
  font-size:40px;
  font-weight: 600;
  margin: 0;
}

.header-text{
  margin-top: 13%;
  font-size: 30px;
  padding-left: 60px
}

.header-text h1{
  font-size: 60px;
  margin-top: 20px;
}

.header-text h1 span{
  color: #ff0000;
}

</style>