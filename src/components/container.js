import React from 'react'
import {Helmet} from "react-helmet";

export default ({ children }) => (
<div>
  <Helmet>
    <link rel="stylesheet" type="text/css" href="/styles/bootstrap4/bootstrap.min.css" />
<link href="/plugins/font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
<link rel="stylesheet" type="text/css" href="/plugins/OwlCarousel2-2.2.1/owl.carousel.css" />
<link rel="stylesheet" type="text/css" href="/plugins/OwlCarousel2-2.2.1/owl.theme.default.css" />
<link rel="stylesheet" type="text/css" href="/plugins/OwlCarousel2-2.2.1/animate.css" />
<link href="/plugins/magnific-popup/magnific-popup.css" rel="stylesheet" type="text/css" />
    
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="/js/typeahead.js"></script>
<script src="/styles/bootstrap4/popper.js"></script>
<script src="/styles/bootstrap4/bootstrap.min.js"></script>
<script src="/plugins/OwlCarousel2-2.2.1/owl.carousel.js"></script>
<script src="/plugins/easing/easing.js"></script>
<script src="/plugins/parallax-js-master/parallax.min.js"></script>
<script src="/plugins/magnific-popup/jquery.magnific-popup.min.js"></script>
<script src="/js/custom.js"></script>
  </Helmet>
    
  <div class="super_container">{children}</div>
</div>
)
