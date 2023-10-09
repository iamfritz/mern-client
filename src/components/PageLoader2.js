import React from 'react';

class PageLoader extends React.Component {

  render() {
    return (
      <section class="resume-section p-3 p-lg-5 d-flex align-items-center">
        <div class="w-100">
          <img
            src="/img/ajax-loader2.gif"
            class="rounded mx-auto d-none"
            width="100"
          />
          <div id="loading">
            <div className="loading-progress"></div>
            <div className="line-scale-pulse-out text-center">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <span>...</span>
            </div>
          </div>
        </div>
      </section>
    );
  }  
}

export default PageLoader; 