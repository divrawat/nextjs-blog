import Link from 'next/link'





 function searchpost() {

  document.getElementById("overlay-content").style.display = "block";
  document.body.style.backgroundColor = "orange";

  
 }
   function removesearch() {
    document.getElementById("overlay-content").style.display = "none";
    document.body.style.background = "none";
   }
  

const Navbar = () => {
 
  
   return (
    <>
            <nav>
            <input type="checkbox" name="" id="check" />
            <label htmlFor="check">
            <span >☰</span>
            
            
            </label>
            <img src="Search.png"  onClick={searchpost} id="hidesearch"  width={22} height={22} alt="" />
            <img src="BlackMoon.png"  onClick={searchpost} id="hidemoon"  width={22} height={22} alt="" />
              <div className="logo">Blog</div>
              
<ul>
  <li><Link href="/whatsapp"><a>Whatsapp</a></Link></li>
  <li><Link href="/status"><a>Status</a></Link></li>
  <li><Link href="/jokes"><a>Jokes</a></Link></li>
  <li><Link href="/images"><a>Images</a></Link></li>
  <li><Link href="/shayari"><a>Shayari</a></Link></li>
  <li><Link href="/poetry"><a>Poetry</a></Link></li>
  <li><Link href="/wishes"><a>Wishes</a></Link></li>
  <li><Link href="/quotes"><a>Quotes</a></Link></li>
  <li><Link href="/memes"><a>Memes</a></Link></li>
  

  <ul className='right'>
  <li><a href="#"><img src="BlackMoon.png" width={22} height={22} alt="" /></a></li>
  <li><a href="#"><img src="Search.png"  onClick={searchpost} id="searchb"  width={22} height={22} alt="" /></a></li>
</ul>

 

</ul>


            </nav>
            <div id="overlay-content">
    <form action="/action_page.php" className='formsearch'>
      <input type="text"  placeholder="Search.." className="placeholdersearch" name="search"/>
      <img src="cross.png" id='cross' height={28} width={28} alt="" onClick={removesearch} />
    </form>
  </div>
   





     </>
   )
 }
 
 export default Navbar