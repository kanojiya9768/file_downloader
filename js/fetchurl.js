//add event listener on submit form
document.getElementById('file_form').addEventListener('submit',fetchInput);


//fetch input and passs it to fetch url function
function fetchInput(e){
    e.preventDefault();
    
    //get url from input box here
    let input_url = document.getElementById('url').value;

    //and pass it to fetch url function so that we can fetch this url and can add download function on it
    fetch_url(input_url);


    //jb tk download start nahi hota tbtk value downloading dikhayega button me
    document.getElementById('submit').value = 'downloading..';
}





//fetching url and addiing a tag to document with download attribute and clickint it for start downloading
function fetch_url(url){
    //fetching file and returning response as blob
    fetch(url).then(res => res.blob()).then(file =>{
        //creating an object of blob response
        let temp_url = URL.createObjectURL(file);

        //creating a tag to put the tempurl into it
        let Create_a_tag = document.createElement('a');

        //adding link into a tag href
        Create_a_tag.href = temp_url;

        //adding download attribute to a tag so that we can download the file
        Create_a_tag.download = temp_url.replace(/^.*[\\\/]/,'');

        //appending the a tag into our html document
         document.getElementById('file_form').appendChild(Create_a_tag);        

        //after calling this fetch_url fucntion click the download button
        Create_a_tag.click();
        
        //after downloading remove a tag from the document
        Create_a_tag.remove();

        //after start dwonloading change the button value  to download
        document.getElementById('submit').value = 'download';

        //after start downloading empty the input field
        let input_url = document.getElementById('url').value = '';

    }).catch(error =>{
        alert("so sorry Can't Download.!");

        //after getting an download error change the button value  to download
       document.getElementById('submit').value = 'download';
    });
}