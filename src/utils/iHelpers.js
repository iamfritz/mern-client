import ReactGA from 'react-ga';

export default { 

  pageloading: (image) => {
	  	return (
	        '<section class="resume-section p-3 p-lg-5 d-flex align-items-center">'+
	          '<div class="w-100">'+
	            '<img src="'+process.env.PUBLIC_URL + '/img/ajax-loader.gif" class="rounded mx-auto d-block" />'+
	          '</div>'+
	        '</section>'
	    )  
  }, //pageloading

  pageError: ( error = {} ) => {
	    return (
	    '<section class="resume-section p-3 p-lg-5 d-flex align-items-center">'+
	      '<div class="w-100">'+
	        error+
	      '</div>'+
	    '</section>'
	    );     
  }, //pageError

  initGA :() =>{
    ReactGA.initialize('UA-138256369-1');
    ReactGA.pageview(window.location.pathname + window.location.search); 
  },
  baseURL :() =>{
    return process.env.REACT_APP_BASE_API; 
  }

}