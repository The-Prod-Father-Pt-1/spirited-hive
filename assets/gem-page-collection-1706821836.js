

    
  
    
  
    
  
    
  
    (function( jQuery ){
    var $module = jQuery('#m-1669363303368').children('.module');
    var $collectionFilter = $module.find('.gf_collection-filter');
    var $sortCollection = $module.find('.gf_sort-collection');
    
    var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';

    var resizeSelect = function() {
        var $collectionFilterRuler = jQuery('<select><option></option></select>');
        var $sortCollectionRuler = jQuery('<select><option></option></select>');

        if ($collectionFilter.find('option:selected').length > 0) {
            $collectionFilterRuler.find('option').html($collectionFilter.find('option:selected').text());
        } else {
            $collectionFilterRuler.find('option').html($collectionFilter.find('option:first').text());
        }
        
        $collectionFilterRuler.css({'width': 'auto','height': '0','opacity':'0','border': '0', 'display': 'block'}).appendTo($module.find('.gf_collection-filter-wrapper'));
        
        if ($sortCollection.find('option:selected').length > 0) {
            $sortCollectionRuler.find('option').html($sortCollection.find('option:selected').text());
        } else {
            $sortCollectionRuler.find('option').html($sortCollection.find('option:first').text());
        }
        $sortCollectionRuler.css({'width': 'auto','height': '0','opacity':'0','border': '0', 'display': 'block'}).appendTo($module.find('.gf_sort-collection-wrapper'));
        var collectionFilterWidth = $collectionFilterRuler.width() + $collectionFilter.outerWidth() - $collectionFilter.width();
        var sortCollectionWidth = $sortCollectionRuler.width() + $sortCollection.outerWidth() - $sortCollection.width();
        
        if (collectionFilterWidth > sortCollectionWidth) {
            $collectionFilter.css('width', collectionFilterWidth);
            $sortCollection.css('width', collectionFilterWidth);
        } else {
            $collectionFilter.css('width', sortCollectionWidth);
            $sortCollection.css('width', sortCollectionWidth);
        }

        $collectionFilterRuler.remove();
        $sortCollectionRuler.remove(); 
    }

    resizeSelect();

    // Collection Filter
    $collectionFilter.bind('change', function(e) {
        if (mode == 'dev') {
            resizeSelect();
        } else {
            var tag = jQuery(this).val();
            
            var currentLocation = window.location.href;
            
            var baseUrl = currentLocation.slice(0, currentLocation.indexOf('/collections/'));
            var tailUrl = currentLocation.slice(currentLocation.indexOf('/collections/') + '/collections/'.length);
            var collectionName = tailUrl.slice(0, tailUrl.indexOf('?') == -1 ? undefined : tailUrl.indexOf('?'));
            var collectionName = collectionName.slice(0, collectionName.indexOf('/') == -1 ? undefined : collectionName.indexOf('/'));
            var query = location.search;
            query = query.replace(/page=\d*/ig ,'').replace('?&', '?').replace('&&', '&')

            window.location.href = baseUrl + '/collections/' + collectionName + ((tag == undefined || tag == '') ? '' : ('/' + tag)) + query;
            
        }
    });

    // Sort Collection
    $sortCollection.bind('change', function(e) {
        if (mode == 'dev') {
            resizeSelect();
        } else {
            var newSortBy = e.target.value;
            var currentSearch = location.search;
            var sortRegex = /sort_by=[\w-]+/ig;

            if (sortRegex.test(currentSearch)) {
                if (newSortBy != '') {
                    currentSearch = currentSearch.replace(sortRegex, 'sort_by=' + newSortBy);
                } else {
                    currentSearch = currentSearch.replace(sortRegex, '');
                    while (currentSearch.indexOf('&&') != -1) {
                        currentSearch.replace('&&', '&');
                    }
                }
            } else if (currentSearch == '' || currentSearch == '?') {
                currentSearch = '?sort_by=' + newSortBy;
            } else {
                currentSearch += ('&sort_by=' + newSortBy);
            }

            location.search = currentSearch;
        }
    });
})( window.GemQuery || jQuery );
  
    (function( jQuery ){
  var $module = jQuery('#m-1669363568541').children('.module');

  var sameHeightTitle = $module.data('sameheightitle'),
  spacing = $module.data('spacing');
  collg = $module.data('collg'),
  colmd = $module.data('colmd'),
  colsm = $module.data('colsm'),
  colxs = $module.data('colxs');

  var $clearfixes = $module.find('.gf_row-no-padding').children('.gf_clearfix');
  var col = collg;

  jQuery(window).resize(function() {
    setTimeout(function() {
      for(var i = 0; i < $clearfixes.length; i++) {
        if($clearfixes.eq(i).css('display') == 'block') {
          if($clearfixes.eq(i).hasClass('visible-lg')) {
            col = collg;
            break;
          }
          if($clearfixes.eq(i).hasClass('visible-md')) {
            col = colmd;
            break;
          }
          if($clearfixes.eq(i).hasClass('visible-sm')) {
            col = colsm;
            break;
          }
          if($clearfixes.eq(i).hasClass('visible-xs')) {
            col = colxs;
            break;
          }
        }
      }
    }, 1000);
  });

  jQuery($module).css('padding', spacing);
})( window.GemQuery || jQuery );
  
    
  
    (function( jQuery ){
  var $module = jQuery('#m-1669363568541-child1').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
  
    
  (function(jQuery) {
  var $module = jQuery('#m-1669363568541-child1-7').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  });
  
  /* Custom code hide badge on the product that has no discount */
  var $product = $module.closest('[data-label="Product"]').children('.module');
  if ($product.length === 0) {
  	$product = $module.closest('[data-icon="gpicon-product"]').children('.module');
  }
  if($product.length > 0){
    if ($product.data('gfv3product') !== undefined) {
    	var selectedVariant = $product.data('gfv3product').getVariant();
    	customBadge(selectedVariant);
    }
  }
  
  function changeVariantFunction(variant){
  	customBadge(variant);
  }
  
  var currentWrapProductId = jQuery('[data-label="Product"]').attr('id');
  if (window.GEMSTORE) {
  	window.GEMSTORE.subscribe("product-"+currentWrapProductId+"-variant", changeVariantFunction);
  }
  
  function customBadge(variant){
  	var currentPrice = variant.price;
  	var comparePrice = variant.compare_at_price;
  	if(currentPrice !== null && comparePrice !== null){
  		if(currentPrice < comparePrice){
  			diff = comparePrice - currentPrice;
  		}else{
  			diff = currentPrice - comparePrice;
  		}
  		if(diff <= 0){
  			$product.find('.gf_product-badge-anchor').css({'display': 'none'});
  		}else{
  			$product.find('.gf_product-badge-anchor').css({'display': 'block'});
  		}
  	}else{
  		$product.find('.gf_product-badge-anchor').css({'display': 'none'});
  	}
  }
  /* End custom code */

})(window.GemQuery || jQuery);
    
  
    (function(jQuery) {
    var $module = jQuery('#m-1669363568541-child1-2').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
  
    (function( jQuery ){
  var $module = jQuery('#m-1669363568541-child1-9').children('.module');
  var $product = $module.closest('[data-label="Product"]');
  var productCurrentId = "";
  if ($product.length > 0) {
    productCurrentId = $product.attr("id");
  }
  var changeVariantFunction = function (variant) {
    if(variant&&variant.id){
      var productHandle = $module.attr("data-phandle");
      var newHandle = "/products/"+productHandle+"?variant="+variant.id;
      $module.find('a').attr("href",newHandle);
    }
  }
  if (window.GEMSTORE) {
    window.GEMSTORE.subscribe("product-" + productCurrentId + "-variant", changeVariantFunction);
  }
})( window.GemQuery || jQuery );
  
    (function( jQuery ){
  var $module = jQuery('#m-1669363568541-child2').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
  
    
  (function(jQuery) {
  var $module = jQuery('#m-1669363568541-child2-7').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  });
  
  /* Custom code hide badge on the product that has no discount */
  var $product = $module.closest('[data-label="Product"]').children('.module');
  if ($product.length === 0) {
  	$product = $module.closest('[data-icon="gpicon-product"]').children('.module');
  }
  if($product.length > 0){
    if ($product.data('gfv3product') !== undefined) {
    	var selectedVariant = $product.data('gfv3product').getVariant();
    	customBadge(selectedVariant);
    }
  }
  
  function changeVariantFunction(variant){
  	customBadge(variant);
  }
  
  var currentWrapProductId = jQuery('[data-label="Product"]').attr('id');
  if (window.GEMSTORE) {
  	window.GEMSTORE.subscribe("product-"+currentWrapProductId+"-variant", changeVariantFunction);
  }
  
  function customBadge(variant){
  	var currentPrice = variant.price;
  	var comparePrice = variant.compare_at_price;
  	if(currentPrice !== null && comparePrice !== null){
  		if(currentPrice < comparePrice){
  			diff = comparePrice - currentPrice;
  		}else{
  			diff = currentPrice - comparePrice;
  		}
  		if(diff <= 0){
  			$product.find('.gf_product-badge-anchor').css({'display': 'none'});
  		}else{
  			$product.find('.gf_product-badge-anchor').css({'display': 'block'});
  		}
  	}else{
  		$product.find('.gf_product-badge-anchor').css({'display': 'none'});
  	}
  }
  /* End custom code */

})(window.GemQuery || jQuery);
    
  
    (function(jQuery) {
    var $module = jQuery('#m-1669363568541-child2-2').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
  
    (function( jQuery ){
  var $module = jQuery('#m-1669363568541-child2-9').children('.module');
  var $product = $module.closest('[data-label="Product"]');
  var productCurrentId = "";
  if ($product.length > 0) {
    productCurrentId = $product.attr("id");
  }
  var changeVariantFunction = function (variant) {
    if(variant&&variant.id){
      var productHandle = $module.attr("data-phandle");
      var newHandle = "/products/"+productHandle+"?variant="+variant.id;
      $module.find('a').attr("href",newHandle);
    }
  }
  if (window.GEMSTORE) {
    window.GEMSTORE.subscribe("product-" + productCurrentId + "-variant", changeVariantFunction);
  }
})( window.GemQuery || jQuery );
  
    (function( jQuery ){
  var $module = jQuery('#m-1669363568541-child3').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
  
    
  (function(jQuery) {
  var $module = jQuery('#m-1669363568541-child3-7').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  });
  
  /* Custom code hide badge on the product that has no discount */
  var $product = $module.closest('[data-label="Product"]').children('.module');
  if ($product.length === 0) {
  	$product = $module.closest('[data-icon="gpicon-product"]').children('.module');
  }
  if($product.length > 0){
    if ($product.data('gfv3product') !== undefined) {
    	var selectedVariant = $product.data('gfv3product').getVariant();
    	customBadge(selectedVariant);
    }
  }
  
  function changeVariantFunction(variant){
  	customBadge(variant);
  }
  
  var currentWrapProductId = jQuery('[data-label="Product"]').attr('id');
  if (window.GEMSTORE) {
  	window.GEMSTORE.subscribe("product-"+currentWrapProductId+"-variant", changeVariantFunction);
  }
  
  function customBadge(variant){
  	var currentPrice = variant.price;
  	var comparePrice = variant.compare_at_price;
  	if(currentPrice !== null && comparePrice !== null){
  		if(currentPrice < comparePrice){
  			diff = comparePrice - currentPrice;
  		}else{
  			diff = currentPrice - comparePrice;
  		}
  		if(diff <= 0){
  			$product.find('.gf_product-badge-anchor').css({'display': 'none'});
  		}else{
  			$product.find('.gf_product-badge-anchor').css({'display': 'block'});
  		}
  	}else{
  		$product.find('.gf_product-badge-anchor').css({'display': 'none'});
  	}
  }
  /* End custom code */

})(window.GemQuery || jQuery);
    
  
    (function(jQuery) {
    var $module = jQuery('#m-1669363568541-child3-2').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
  
    (function( jQuery ){
  var $module = jQuery('#m-1669363568541-child3-9').children('.module');
  var $product = $module.closest('[data-label="Product"]');
  var productCurrentId = "";
  if ($product.length > 0) {
    productCurrentId = $product.attr("id");
  }
  var changeVariantFunction = function (variant) {
    if(variant&&variant.id){
      var productHandle = $module.attr("data-phandle");
      var newHandle = "/products/"+productHandle+"?variant="+variant.id;
      $module.find('a').attr("href",newHandle);
    }
  }
  if (window.GEMSTORE) {
    window.GEMSTORE.subscribe("product-" + productCurrentId + "-variant", changeVariantFunction);
  }
})( window.GemQuery || jQuery );
  
    (function( jQuery ){
  var $module = jQuery('#m-1669363568541-child4').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
  
    
  (function(jQuery) {
  var $module = jQuery('#m-1669363568541-child4-7').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  });
  
  /* Custom code hide badge on the product that has no discount */
  var $product = $module.closest('[data-label="Product"]').children('.module');
  if ($product.length === 0) {
  	$product = $module.closest('[data-icon="gpicon-product"]').children('.module');
  }
  if($product.length > 0){
    if ($product.data('gfv3product') !== undefined) {
    	var selectedVariant = $product.data('gfv3product').getVariant();
    	customBadge(selectedVariant);
    }
  }
  
  function changeVariantFunction(variant){
  	customBadge(variant);
  }
  
  var currentWrapProductId = jQuery('[data-label="Product"]').attr('id');
  if (window.GEMSTORE) {
  	window.GEMSTORE.subscribe("product-"+currentWrapProductId+"-variant", changeVariantFunction);
  }
  
  function customBadge(variant){
  	var currentPrice = variant.price;
  	var comparePrice = variant.compare_at_price;
  	if(currentPrice !== null && comparePrice !== null){
  		if(currentPrice < comparePrice){
  			diff = comparePrice - currentPrice;
  		}else{
  			diff = currentPrice - comparePrice;
  		}
  		if(diff <= 0){
  			$product.find('.gf_product-badge-anchor').css({'display': 'none'});
  		}else{
  			$product.find('.gf_product-badge-anchor').css({'display': 'block'});
  		}
  	}else{
  		$product.find('.gf_product-badge-anchor').css({'display': 'none'});
  	}
  }
  /* End custom code */

})(window.GemQuery || jQuery);
    
  
    (function(jQuery) {
    var $module = jQuery('#m-1669363568541-child4-2').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
  
    (function( jQuery ){
  var $module = jQuery('#m-1669363568541-child4-9').children('.module');
  var $product = $module.closest('[data-label="Product"]');
  var productCurrentId = "";
  if ($product.length > 0) {
    productCurrentId = $product.attr("id");
  }
  var changeVariantFunction = function (variant) {
    if(variant&&variant.id){
      var productHandle = $module.attr("data-phandle");
      var newHandle = "/products/"+productHandle+"?variant="+variant.id;
      $module.find('a').attr("href",newHandle);
    }
  }
  if (window.GEMSTORE) {
    window.GEMSTORE.subscribe("product-" + productCurrentId + "-variant", changeVariantFunction);
  }
})( window.GemQuery || jQuery );
  
    (function( jQuery ){
  var $module = jQuery('#m-1669363568541-child5').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
  
    
  (function(jQuery) {
  var $module = jQuery('#m-1669363568541-child5-7').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  });
  
  /* Custom code hide badge on the product that has no discount */
  var $product = $module.closest('[data-label="Product"]').children('.module');
  if ($product.length === 0) {
  	$product = $module.closest('[data-icon="gpicon-product"]').children('.module');
  }
  if($product.length > 0){
    if ($product.data('gfv3product') !== undefined) {
    	var selectedVariant = $product.data('gfv3product').getVariant();
    	customBadge(selectedVariant);
    }
  }
  
  function changeVariantFunction(variant){
  	customBadge(variant);
  }
  
  var currentWrapProductId = jQuery('[data-label="Product"]').attr('id');
  if (window.GEMSTORE) {
  	window.GEMSTORE.subscribe("product-"+currentWrapProductId+"-variant", changeVariantFunction);
  }
  
  function customBadge(variant){
  	var currentPrice = variant.price;
  	var comparePrice = variant.compare_at_price;
  	if(currentPrice !== null && comparePrice !== null){
  		if(currentPrice < comparePrice){
  			diff = comparePrice - currentPrice;
  		}else{
  			diff = currentPrice - comparePrice;
  		}
  		if(diff <= 0){
  			$product.find('.gf_product-badge-anchor').css({'display': 'none'});
  		}else{
  			$product.find('.gf_product-badge-anchor').css({'display': 'block'});
  		}
  	}else{
  		$product.find('.gf_product-badge-anchor').css({'display': 'none'});
  	}
  }
  /* End custom code */

})(window.GemQuery || jQuery);
    
  
    (function(jQuery) {
    var $module = jQuery('#m-1669363568541-child5-2').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
  
    (function( jQuery ){
  var $module = jQuery('#m-1669363568541-child5-9').children('.module');
  var $product = $module.closest('[data-label="Product"]');
  var productCurrentId = "";
  if ($product.length > 0) {
    productCurrentId = $product.attr("id");
  }
  var changeVariantFunction = function (variant) {
    if(variant&&variant.id){
      var productHandle = $module.attr("data-phandle");
      var newHandle = "/products/"+productHandle+"?variant="+variant.id;
      $module.find('a').attr("href",newHandle);
    }
  }
  if (window.GEMSTORE) {
    window.GEMSTORE.subscribe("product-" + productCurrentId + "-variant", changeVariantFunction);
  }
})( window.GemQuery || jQuery );
  
    (function( jQuery ){
  var $module = jQuery('#m-1669363568541-child6').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
  
    
  (function(jQuery) {
  var $module = jQuery('#m-1669363568541-child6-7').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  });
  
  /* Custom code hide badge on the product that has no discount */
  var $product = $module.closest('[data-label="Product"]').children('.module');
  if ($product.length === 0) {
  	$product = $module.closest('[data-icon="gpicon-product"]').children('.module');
  }
  if($product.length > 0){
    if ($product.data('gfv3product') !== undefined) {
    	var selectedVariant = $product.data('gfv3product').getVariant();
    	customBadge(selectedVariant);
    }
  }
  
  function changeVariantFunction(variant){
  	customBadge(variant);
  }
  
  var currentWrapProductId = jQuery('[data-label="Product"]').attr('id');
  if (window.GEMSTORE) {
  	window.GEMSTORE.subscribe("product-"+currentWrapProductId+"-variant", changeVariantFunction);
  }
  
  function customBadge(variant){
  	var currentPrice = variant.price;
  	var comparePrice = variant.compare_at_price;
  	if(currentPrice !== null && comparePrice !== null){
  		if(currentPrice < comparePrice){
  			diff = comparePrice - currentPrice;
  		}else{
  			diff = currentPrice - comparePrice;
  		}
  		if(diff <= 0){
  			$product.find('.gf_product-badge-anchor').css({'display': 'none'});
  		}else{
  			$product.find('.gf_product-badge-anchor').css({'display': 'block'});
  		}
  	}else{
  		$product.find('.gf_product-badge-anchor').css({'display': 'none'});
  	}
  }
  /* End custom code */

})(window.GemQuery || jQuery);
    
  
    (function(jQuery) {
    var $module = jQuery('#m-1669363568541-child6-2').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
  
    (function( jQuery ){
  var $module = jQuery('#m-1669363568541-child6-9').children('.module');
  var $product = $module.closest('[data-label="Product"]');
  var productCurrentId = "";
  if ($product.length > 0) {
    productCurrentId = $product.attr("id");
  }
  var changeVariantFunction = function (variant) {
    if(variant&&variant.id){
      var productHandle = $module.attr("data-phandle");
      var newHandle = "/products/"+productHandle+"?variant="+variant.id;
      $module.find('a').attr("href",newHandle);
    }
  }
  if (window.GEMSTORE) {
    window.GEMSTORE.subscribe("product-" + productCurrentId + "-variant", changeVariantFunction);
  }
})( window.GemQuery || jQuery );
  
    (function( jQuery ){
  var $module = jQuery('#m-1669363568541-child7').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
  
    
  (function(jQuery) {
  var $module = jQuery('#m-1669363568541-child7-7').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  });
  
  /* Custom code hide badge on the product that has no discount */
  var $product = $module.closest('[data-label="Product"]').children('.module');
  if ($product.length === 0) {
  	$product = $module.closest('[data-icon="gpicon-product"]').children('.module');
  }
  if($product.length > 0){
    if ($product.data('gfv3product') !== undefined) {
    	var selectedVariant = $product.data('gfv3product').getVariant();
    	customBadge(selectedVariant);
    }
  }
  
  function changeVariantFunction(variant){
  	customBadge(variant);
  }
  
  var currentWrapProductId = jQuery('[data-label="Product"]').attr('id');
  if (window.GEMSTORE) {
  	window.GEMSTORE.subscribe("product-"+currentWrapProductId+"-variant", changeVariantFunction);
  }
  
  function customBadge(variant){
  	var currentPrice = variant.price;
  	var comparePrice = variant.compare_at_price;
  	if(currentPrice !== null && comparePrice !== null){
  		if(currentPrice < comparePrice){
  			diff = comparePrice - currentPrice;
  		}else{
  			diff = currentPrice - comparePrice;
  		}
  		if(diff <= 0){
  			$product.find('.gf_product-badge-anchor').css({'display': 'none'});
  		}else{
  			$product.find('.gf_product-badge-anchor').css({'display': 'block'});
  		}
  	}else{
  		$product.find('.gf_product-badge-anchor').css({'display': 'none'});
  	}
  }
  /* End custom code */

})(window.GemQuery || jQuery);
    
  
    (function(jQuery) {
    var $module = jQuery('#m-1669363568541-child7-2').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
  
    (function( jQuery ){
  var $module = jQuery('#m-1669363568541-child7-9').children('.module');
  var $product = $module.closest('[data-label="Product"]');
  var productCurrentId = "";
  if ($product.length > 0) {
    productCurrentId = $product.attr("id");
  }
  var changeVariantFunction = function (variant) {
    if(variant&&variant.id){
      var productHandle = $module.attr("data-phandle");
      var newHandle = "/products/"+productHandle+"?variant="+variant.id;
      $module.find('a').attr("href",newHandle);
    }
  }
  if (window.GEMSTORE) {
    window.GEMSTORE.subscribe("product-" + productCurrentId + "-variant", changeVariantFunction);
  }
})( window.GemQuery || jQuery );
  
    (function( jQuery ){
  var $module = jQuery('#m-1669363568541-child8').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
  
    
  (function(jQuery) {
  var $module = jQuery('#m-1669363568541-child8-7').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  });
  
  /* Custom code hide badge on the product that has no discount */
  var $product = $module.closest('[data-label="Product"]').children('.module');
  if ($product.length === 0) {
  	$product = $module.closest('[data-icon="gpicon-product"]').children('.module');
  }
  if($product.length > 0){
    if ($product.data('gfv3product') !== undefined) {
    	var selectedVariant = $product.data('gfv3product').getVariant();
    	customBadge(selectedVariant);
    }
  }
  
  function changeVariantFunction(variant){
  	customBadge(variant);
  }
  
  var currentWrapProductId = jQuery('[data-label="Product"]').attr('id');
  if (window.GEMSTORE) {
  	window.GEMSTORE.subscribe("product-"+currentWrapProductId+"-variant", changeVariantFunction);
  }
  
  function customBadge(variant){
  	var currentPrice = variant.price;
  	var comparePrice = variant.compare_at_price;
  	if(currentPrice !== null && comparePrice !== null){
  		if(currentPrice < comparePrice){
  			diff = comparePrice - currentPrice;
  		}else{
  			diff = currentPrice - comparePrice;
  		}
  		if(diff <= 0){
  			$product.find('.gf_product-badge-anchor').css({'display': 'none'});
  		}else{
  			$product.find('.gf_product-badge-anchor').css({'display': 'block'});
  		}
  	}else{
  		$product.find('.gf_product-badge-anchor').css({'display': 'none'});
  	}
  }
  /* End custom code */

})(window.GemQuery || jQuery);
    
  
    (function(jQuery) {
    var $module = jQuery('#m-1669363568541-child8-2').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
  
    (function( jQuery ){
  var $module = jQuery('#m-1669363568541-child8-9').children('.module');
  var $product = $module.closest('[data-label="Product"]');
  var productCurrentId = "";
  if ($product.length > 0) {
    productCurrentId = $product.attr("id");
  }
  var changeVariantFunction = function (variant) {
    if(variant&&variant.id){
      var productHandle = $module.attr("data-phandle");
      var newHandle = "/products/"+productHandle+"?variant="+variant.id;
      $module.find('a').attr("href",newHandle);
    }
  }
  if (window.GEMSTORE) {
    window.GEMSTORE.subscribe("product-" + productCurrentId + "-variant", changeVariantFunction);
  }
})( window.GemQuery || jQuery );
  
    (function( jQuery ){
  var $module = jQuery('#m-1669363568541-child9').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
  
    
  (function(jQuery) {
  var $module = jQuery('#m-1669363568541-child9-7').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  });
  
  /* Custom code hide badge on the product that has no discount */
  var $product = $module.closest('[data-label="Product"]').children('.module');
  if ($product.length === 0) {
  	$product = $module.closest('[data-icon="gpicon-product"]').children('.module');
  }
  if($product.length > 0){
    if ($product.data('gfv3product') !== undefined) {
    	var selectedVariant = $product.data('gfv3product').getVariant();
    	customBadge(selectedVariant);
    }
  }
  
  function changeVariantFunction(variant){
  	customBadge(variant);
  }
  
  var currentWrapProductId = jQuery('[data-label="Product"]').attr('id');
  if (window.GEMSTORE) {
  	window.GEMSTORE.subscribe("product-"+currentWrapProductId+"-variant", changeVariantFunction);
  }
  
  function customBadge(variant){
  	var currentPrice = variant.price;
  	var comparePrice = variant.compare_at_price;
  	if(currentPrice !== null && comparePrice !== null){
  		if(currentPrice < comparePrice){
  			diff = comparePrice - currentPrice;
  		}else{
  			diff = currentPrice - comparePrice;
  		}
  		if(diff <= 0){
  			$product.find('.gf_product-badge-anchor').css({'display': 'none'});
  		}else{
  			$product.find('.gf_product-badge-anchor').css({'display': 'block'});
  		}
  	}else{
  		$product.find('.gf_product-badge-anchor').css({'display': 'none'});
  	}
  }
  /* End custom code */

})(window.GemQuery || jQuery);
    
  
    (function(jQuery) {
    var $module = jQuery('#m-1669363568541-child9-2').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
  
    (function( jQuery ){
  var $module = jQuery('#m-1669363568541-child9-9').children('.module');
  var $product = $module.closest('[data-label="Product"]');
  var productCurrentId = "";
  if ($product.length > 0) {
    productCurrentId = $product.attr("id");
  }
  var changeVariantFunction = function (variant) {
    if(variant&&variant.id){
      var productHandle = $module.attr("data-phandle");
      var newHandle = "/products/"+productHandle+"?variant="+variant.id;
      $module.find('a').attr("href",newHandle);
    }
  }
  if (window.GEMSTORE) {
    window.GEMSTORE.subscribe("product-" + productCurrentId + "-variant", changeVariantFunction);
  }
})( window.GemQuery || jQuery );
  
    (function( jQuery ){
  var $module = jQuery('#m-1669363568541-child10').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
  
    
  (function(jQuery) {
  var $module = jQuery('#m-1669363568541-child10-7').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  });
  
  /* Custom code hide badge on the product that has no discount */
  var $product = $module.closest('[data-label="Product"]').children('.module');
  if ($product.length === 0) {
  	$product = $module.closest('[data-icon="gpicon-product"]').children('.module');
  }
  if($product.length > 0){
    if ($product.data('gfv3product') !== undefined) {
    	var selectedVariant = $product.data('gfv3product').getVariant();
    	customBadge(selectedVariant);
    }
  }
  
  function changeVariantFunction(variant){
  	customBadge(variant);
  }
  
  var currentWrapProductId = jQuery('[data-label="Product"]').attr('id');
  if (window.GEMSTORE) {
  	window.GEMSTORE.subscribe("product-"+currentWrapProductId+"-variant", changeVariantFunction);
  }
  
  function customBadge(variant){
  	var currentPrice = variant.price;
  	var comparePrice = variant.compare_at_price;
  	if(currentPrice !== null && comparePrice !== null){
  		if(currentPrice < comparePrice){
  			diff = comparePrice - currentPrice;
  		}else{
  			diff = currentPrice - comparePrice;
  		}
  		if(diff <= 0){
  			$product.find('.gf_product-badge-anchor').css({'display': 'none'});
  		}else{
  			$product.find('.gf_product-badge-anchor').css({'display': 'block'});
  		}
  	}else{
  		$product.find('.gf_product-badge-anchor').css({'display': 'none'});
  	}
  }
  /* End custom code */

})(window.GemQuery || jQuery);
    
  
    (function(jQuery) {
    var $module = jQuery('#m-1669363568541-child10-2').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
  
    (function( jQuery ){
  var $module = jQuery('#m-1669363568541-child10-9').children('.module');
  var $product = $module.closest('[data-label="Product"]');
  var productCurrentId = "";
  if ($product.length > 0) {
    productCurrentId = $product.attr("id");
  }
  var changeVariantFunction = function (variant) {
    if(variant&&variant.id){
      var productHandle = $module.attr("data-phandle");
      var newHandle = "/products/"+productHandle+"?variant="+variant.id;
      $module.find('a').attr("href",newHandle);
    }
  }
  if (window.GEMSTORE) {
    window.GEMSTORE.subscribe("product-" + productCurrentId + "-variant", changeVariantFunction);
  }
})( window.GemQuery || jQuery );
  