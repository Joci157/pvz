import ajaxService from "./ajaxService";

const searchCode = ()=>{
    document.querySelector('form').addEventListener('submit',(e)=>{
        e.preventDefault() //keiciama standartine formos elgsena
        const searchTerm = document.querySelector('.term').value;
        let searchResponse;
        ajaxService(searchTerm)
            .then(result => searchResponse = result)
            .then(()=>console.log(searchResponse.data[0].post_code))
            .then(()=>document.querySelector('.result').value = searchResponse.data[0].post_code)
    })
}
export default searchCode