var globalRemainingSeconds,terminalDiscountStatus,panDtoList,encRefId,focusedField,shuffledArray,ctrlDown=!1,ctrlKey=17,cmdKey=91,disableCountDown=!1,successfullyDone=!1,cursorPosition=0,SYSTEM_INTERNAL_ERROR_MESSAGE="خطای داخلی سیستم",INVALID_INPUT_MESSAGE="لطفا اطلاعات مورد نیاز را به درستی وارد کنید",NETWORK_ERROR_MESSAGE="خطا در ارسال اطلاعات. بعد از بررسی ارتباط اینترنتی دوباره تلاش کنید",RESULT_REMAINING_TIME_MESSAGE="تا انتقال به سایت پذیرنده “",TIMEOUT_MESSAGE="مهلت پرداخت این تراکنش به پایان رسیده است. لطفا دوباره اقدام به خرید کنید",selectedPanIndex=-1,availableBankLogos={610433:"mellat",589905:"melli",170019:"melli",603799:"melli",603769:"saderat",639217:"keshavarzi",603770:"keshavarzi",589210:"sepah",627353:"tejarat",628023:"maskan",207177:"tose_saderat",627648:"tose_saderat",627961:"sanat_madan",627760:"postbank",621986:"saman",627412:"eghtesad_novin",639347:"pasargad",502229:"pasargad",639607:"sarmaye",627488:"karafarin",639194:"parsian",622106:"parsian",639346:"sina",589463:"refah",628157:"etebari_tose",504706:"shahr",502806:"shahr",502908:"tose_teavon",502938:"dey",606373:"gharzolhasane_mehr",639370:"etebari_mehr",627381:"ansar",636214:"ayandeh",636949:"hekmat_iranian",505785:"iran_zamin",505416:"gardeshgari",636795:"markazi",504172:"resalat",505801:"kosar",505809:"khavarmianeh",507677:"noor",606256:"melal",639599:"ghavamin"};function validateAllInputs(){var e=!0;return validatePan()||(e=!1),validateInput("inputpin",/\d{4,12}/)||(e=!1),validateInput("inputcvv2",/\d{3,4}/)||(e=!1),validateDate()||(e=!1),validateInput("inputcapcha",/\d{5}/)||(e=!1),validateInput("inputemail",/^(\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+)?$/)||(e=!1),document.getElementById("inputpayerid")&&!validateInput("inputpayerid",/\d{1,30}/)&&(e=!1),e?hideMessage():showMessage(INVALID_INPUT_MESSAGE),e}function removeInvalidClassFromPan(){$(".cardnumberbox").parent().parent().removeClass("invalid")}function validatePan(){var e=checkPattern("cardnumber",/\d{4}\s?\d{4}\s?\d{4}\s?\d{4}/)||selectedPanIndex>-1&&checkPattern("cardnumber",/\d{4}\s?\d{2}(×){2}\s?(×){4}\s?\d{4}/);return e?removeInvalidClassFromPan():$(".cardnumberbox").parent().parent().addClass("invalid"),e}function sale(){var e={pan:selectedPanIndex>=0?null:document.getElementById("cardnumber").value.replace(/ /g,""),selectedPanIndex:selectedPanIndex,pin:document.getElementById("inputpin").value,cvv2:document.getElementById("inputcvv2").value,expireMonth:document.getElementById("inputmonth")?document.getElementById("inputmonth").value:null,expireYear:document.getElementById("inputyear")?document.getElementById("inputyear").value:null,captcha:document.getElementById("inputcapcha").value,payerId:document.getElementById("inputpayerid")?document.getElementById("inputpayerid").value:null,email:document.getElementById("inputemail").value,savePan:!!document.getElementById("savePanCheckbox")&&document.getElementById("savePanCheckbox").checked};showSubmitSpinner(),$.ajax({contentType:"application/json",data:JSON.stringify(e),dataType:"json",success:processSaleResponse,type:"POST",url:"sale.mellat?RefId="+encRefId})}function processSaleResponse(e){if(hideSubmitSpinner(),e)if("OK"===e.status)successfullyDone=!0,document.forms.resultForm.submit();else if("BLOCKER_ERROR"===e.status)document.forms.resultForm.submit();else if(validateAllInputs(),"INVALID_CAPTCHA"===e.status)showMessage(INVALID_INPUT_MESSAGE),$("#inputcapcha").parent().parent().addClass("invalid");else switch(refreshCaptcha(),e.status){case"INVALID_PAYER_ID":$("#inputpayerid").parent().parent().addClass("invalid");break;case"SYSTEM_INTERNAL_ERROR":showMessage(SYSTEM_INTERNAL_ERROR_MESSAGE);break;case"SALE_FAILED":"419"===e.responseCode||"419"===e.responseCode?(stopCountDown(),showMessage(TIMEOUT_MESSAGE),document.getElementById("ResCode").value=e.responseCode,document.forms.returnForm.submit()):"11"===e.responseCode&&$(".cardnumberbox").parent().parent().addClass("invalid"),showMessage(e.description)}}function refreshCaptcha(){$("#inputcapcha").val(""),document.getElementById("captcha-img").src="captchaimg.jpg?RefId="+encRefId+"&rnd= "+Math.random()}function showMessage(e){$(".card-errorbox").text(e),$(".card-errorbox").addClass("show"),setTimeout("hideMessage()",5e3)}function hideMessage(){$(".card-errorbox").removeClass("show")}function handleSaleError(e,n,t){hideSubmitSpinner(),hideCheckDiscountSpinner(),0===e.status?showMessage(NETWORK_ERROR_MESSAGE):404===e.status?showMessage(SYSTEM_INTERNAL_ERROR_MESSAGE):500==e.status?showMessage(SYSTEM_INTERNAL_ERROR_MESSAGE):"parsererror"===n?showMessage(SYSTEM_INTERNAL_ERROR_MESSAGE):"timeout"===n?showMessage(NETWORK_ERROR_MESSAGE):"abort"===n?showMessage(NETWORK_ERROR_MESSAGE):"ajaxError"==e.type?showMessage(NETWORK_ERROR_MESSAGE):showMessage(SYSTEM_INTERNAL_ERROR_MESSAGE)}function validateAndSale(e){validateAllInputs()&&sale()}function removeInvalidClassFromInput(e){$("#"+e).parent().parent().removeClass("invalid")}function validateInput(e,n){return checkPattern(e,n)?(removeInvalidClassFromInput(e),!0):($("#"+e).parent().parent().addClass("invalid"),!1)}function validateDate(){var e=!0;if($("#inputmonth:visible").length>0){checkPattern("inputmonth",/\d{2}/)||(e=!1);var n=document.getElementById("inputmonth").value;(n<1||n>12)&&(e=!1)}return $("#inputyear:visible").length>0&&!checkPattern("inputyear",/\d{2}/)&&(e=!1),e?removeInvalidClassFromInput("inputmonth"):$("#inputmonth").parent().parent().addClass("invalid"),e}function focusNextField(e,n,t){if(isNumericKeyDownOrUp(getEventKeyCode(t))&&e.value.length>=e.maxLength)for(var a=n.split("|"),o=0;o<a.length;o++){var s=a[o];if($("#"+s+":visible").length>0){var i=document.getElementById(s);i.focus(),i.setSelectionRange(0,i.value.length);break}}}function hideKeyPadOnTab(e){9===getEventKeyCode(e)&&hideKeyPad()}function checkPattern(e,n){return n.test(document.getElementById(e).value)}function setPanCursorPosition(e){var n=document.getElementById("cardnumber"),t=getEventKeyCode(e);if(cursorPosition=n.selectionStart,8===t){if(0!==cursorPosition){var a=n.value.substring(n.selectionStart,n.selectionEnd);/ /.test(a)?5!==cursorPosition&&10!==cursorPosition&&15!==cursorPosition||cursorPosition--:(6!==cursorPosition&&11!==cursorPosition&&16!==cursorPosition||cursorPosition--,cursorPosition--),cursorPosition=cursorPosition<0?0:cursorPosition}}else 46===t?4!==cursorPosition&&9!==cursorPosition&&14!==cursorPosition||cursorPosition++:isNumericKeyDownOrUp(t)&&(3!==cursorPosition&&8!==cursorPosition&&13!==cursorPosition&&4!==cursorPosition&&9!==cursorPosition&&14!==cursorPosition||cursorPosition++,cursorPosition++)}function formatPanOnKeyDown(e){if(shouldIgnore(getEventKeyCode(e)))return!0;var n=document.getElementById("cardnumber"),t=concatNumericChars(n.value,16);n.value=getFormattedPan(t)}function shouldIgnore(e){return!(!e||isNumericKeyDownOrUp(e)||ctrlDown&&86===e)}function formatPanOnKeyUp(e){var n=getEventKeyCode(e);if(shouldIgnore(n))return!0;var t=document.getElementById("cardnumber"),a=concatNumericChars(t.value,16);t.value=getFormattedPan(a);!n||isNumericKeyDownOrUp(n)}function getFormattedPan(e){for(var n,t="",a=/\d{1,4}/g;null!=(n=a.exec(e));)0!==t.length&&(t+=" "),t+=n[0];return t}function concatNumericChars(e,n){for(var t,a="",o=/\d{1,16}/g;null!=(t=o.exec(e))&&a.length<n;)a+=t[0];return a.length>n&&(a=a.substring(0,n)),a}function extractNumbers(e,n){var t=e.value;t=concatNumericChars(t,n),e.value=t}function preventInvalidKeys(e){var n=getEventKeyCode(e);if(-1!==[16,17,91,0,13,8,9,33,34,35,36,37,38,39,40,45,46].indexOf(n))return!0;if(isNumericKeyDownOrUp(n))return!0;if(ctrlDown)return!0;return n>=112&&n<=123||(window.event?window.event.returnValue=!1:e.preventDefault(),!1)}function isNumericKeyDownOrUp(e){return e>47&&e<58||e>95&&e<106}function getEventKeyCode(e){return window.event?e.keyCode:e.which}function cancelPay(){return document.getElementById("ResCode").value="17",document.forms.returnForm.submit(),!1}function countDownRemainingTime(e){if(!disableCountDown){if(e<=0)stopCountDown(),successfullyDone||(document.getElementById("ResCode").value="415",document.forms.returnForm.submit());else{var n=Math.floor(e/60),t=e%60;$("#remaining-time b").text((n+"").padStart(2,"0")+":"+(t+"").padStart(2,"0"))}globalRemainingSeconds=e-1,setTimeout("countDownRemainingTime(globalRemainingSeconds)",1e3)}}function stopCountDown(){disableCountDown=!0,$("#remaining-time b").text("--:--")}function fillField(e,n){if(focusedField){n.preventDefault(),n.stopPropagation(),focusedField.focus();var t,a=e.value,o=focusedField.selectionStart,s=focusedField.selectionEnd;(t=o===focusedField.value.length?focusedField.value+a:focusedField.value.substring(0,o)+a+focusedField.value.substring(s,focusedField.value.length)).length<=focusedField.maxLength&&(focusedField.value=t),focusedField.value.length===focusedField.maxLength&&keypadTab()}return!1}function keypadTab(){hideKeyPad();var e="inputpin"===focusedField.id?"inputcvv2":"inputmonth",n=document.getElementById(e);n.focus(),n.setSelectionRange(0,n.value.length)}function keyPadBackspace(e){if(focusedField){e.preventDefault(),e.stopPropagation();var n=focusedField.selectionStart,t=focusedField.selectionEnd;n===focusedField.value.length?focusedField.value=focusedField.value.substring(0,focusedField.value.length-1):focusedField.value=n===t?focusedField.value.substring(0,n-1)+focusedField.value.substring(t,focusedField.value.length):focusedField.value.substring(0,n)+focusedField.value.substring(t,focusedField.value.length)}return!1}function setFocusedField(e){focusedField=e}function shuffleKeyPad(){shuffledArray=shuffle([0,1,2,3,4,5,6,7,8,9]);for(var e=0;e<shuffledArray.length;e++){var n="num"+e,t=document.getElementById(n);t.value=shuffledArray[e],t.innerHTML=shuffledArray[e]}}function showKeyPad(e,n){var t=document.getElementById(e);return t.focus(),t.setSelectionRange(0,t.value.length),setFocusedField(t),shuffledArray||shuffleKeyPad(),$(".keypad-container").insertAfter("#"+e),$(".keypad-container").addClass("openkeypad"),n&&(n.preventDefault(),n.stopPropagation()),!1}function hideKeyPad(){$(".keypad-container").removeClass("openkeypad")}function shuffle(e){var n,t,a;for(a=e.length-1;a>0;a--)n=Math.floor(Math.random()*(a+1)),t=e[a],e[a]=e[n],e[n]=t;return e}function waitAndSendSuccessResult(e){e<=0?document.getElementById("return-button").disabled||sendSuccessResult():($(".timer").text(RESULT_REMAINING_TIME_MESSAGE+e),globalRemainingSeconds=e-1,setTimeout("waitAndSendSuccessResult(globalRemainingSeconds)",1e3))}function sendSuccessResult(){document.getElementById("return-button").disabled||(document.getElementById("return-button").disabled=!0,$("#return-button").attr("disabled","disabled").html('در حال بازگشت به سایت پذیرنده<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>'),$(".timer").hide(),document.forms.returnForm.submit(),setTimeout("enableReturnButton()",3e4))}function enableReturnButton(){$("#return-button").attr("disabled","disabled").html("تکمیل خرید"),document.getElementById("return-button").disabled=!1}function hideKeyPadOnOutsideClick(e){$(".keypad-container").parent()[0]!==e.target&&0===$(e.target).parents(".keypad-parent").length&&hideKeyPad()}function hideCardSuggestionListOnOutSideClick(e){$(".cardnumberbox")[0]!==e.target&&0===$(e.target).parents(".cardnumberbox").length&&hideCardSuggestionList()}function showSubmitSpinner(){$(".btn-decline").hide(),$(".btn-submit-form").addClass("perches-requested"),$(".btn-perches").attr("disabled","disabled").html('در حال ارسال اطلاعات<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>')}function hideSubmitSpinner(){$(".btn-perches").attr("disabled","").html("پرداخت"),$(".btn-submit-form").removeClass("perches-requested"),$(".btn-decline").show()}function showCheckDiscountSpinner(){$(".banklogo").append('<span class="spinner-border spinner-border-sm " role="status" aria-hidden="true"></span>')}function hideCheckDiscountSpinner(){$(".banklogo").find(".spinner-border").remove()}function checkPanDiscount(){if(1===terminalDiscountStatus){var e=document.getElementById("cardnumber").value.replace(/ /g,"");if(selectedPanIndex>=0||16===e.length){var n=(new Intl.NumberFormat).format(originalAmount);$(".price-number").text(n+" ریال");prepare4DiscountServiceCall(),selectedPanIndex>=0?$.post("discount.mellat",{W_REFID:encRefId,SELECTED_PAN_INDEX:selectedPanIndex},processDiscountResponse):$.post("discount.mellat",{W_REFID:encRefId,PAN:e},processDiscountResponse)}}}function prepare4DiscountServiceCall(){showCheckDiscountSpinner(),$("payButton").attr("disabled","disabled")}var processDiscountResponse=function(e){if(hideCheckDiscountSpinner(),e)if("SUCCESSFUL"===(e=JSON.parse(e)).status){var n=new Intl.NumberFormat,t=n.format(e.discountAmount),a=n.format(e.amountAfterDiscount);if(0!==e.discountAmount){var o="به کارت شما "+t+" ریال تخفیف تعلق گرفت<br> مبلغ نهایی: "+a+" ریال";e.description&&(o+="<br>"+e.description),openDiscountDialog(o,e.amountAfterDiscount)}else if(e.description){openDiscountDialog(o="به کارت شما "+e.description+" تعلق گرفت<br>",e.amountAfterDiscount)}$("payButton").attr("disabled","")}else"MAX_DISCOUNT_CALL_EXCEEDED"===e.status?showMessage("تعداد دفعات تغییر شماره کارت بیش از حد مجاز است"):showMessage("خطای سیستمی در بررسی تخفیف");else showMessage("خطای سیستمی در بررسی تخفیف")};function openDiscountDialog(e,n){$(".modal-body p").html(e),$(".modal-footer .btn-primary").click(function(){setAmount(n),hideCheckDiscountSpinner(),hideDiscountDialog()}),$(".modal-footer .btn-secondary").click(function(){setAmount(originalAmount),hideCheckDiscountSpinner(),hideDiscountDialog();var e=document.getElementById("cardnumber");e.focus(),e.setSelectionRange(0,e.value.length)}),showDiscountDialog(),hideKeyPad(),$(".modal-footer .btn-primary").focus()}function setPan(e){$("#cardnumber").val(e),removeInvalidClassFromPan()}function hideDiscountDialog(){$(".modal-backdrop").hide(),$(".modal").hide()}function showDiscountDialog(){$(".modal-backdrop").show(),$(".modal").show()}function setAmount(e){var n=new Intl.NumberFormat;$(".price-number").text(n.format(e)+" ریال")}function setCardSuggestionListHeight(){var e=.7*$(".carddetail").height()+"px";$(".card-suggestionlist").css({"max-height":e})}function filterAndShowCardSuggestionList(){var e=[];if(panDtoList)for(var n=document.getElementById("cardnumber").value.replace(/ /g,""),t=n.length<7?n:n.substring(0,6),a=0;a<panDtoList.length;a++){var o=panDtoList[a];o.index=a,0===o.maskedPan.lastIndexOf(t,0)&&e.push(o)}showCardSuggestionList(e)}function toggleAllPans(){if($("#card-list-button.close-button").length>0)hideCardSuggestionList();else{for(var e=0;e<panDtoList.length;e++){panDtoList[e].index=e}showCardSuggestionList(panDtoList);var n=document.getElementById("cardnumber");n.focus(),n.setSelectionRange(0,n.value.length)}}function showCardSuggestionList(e){if(e.length>0){$(".card-suggestionlist").children("a:not(.editcard)").remove();for(var n=e.length-1;n>-1;n--){var t=e[n],a=t.maskedPan,o=a.substring(0,6),s='<a class="dropdown-item" href="#" tabindex="-1"  onclick="selectPan('+t.index+')"><span>'+(isBankLogoAvailable(o)?'<img src="'+getBankLogoSrc(o)+'">':"")+"</span>"+a+" "+t.bankName+"</a>";$(".card-suggestionlist").prepend(s)}$(".cardnumberbox").addClass("opensugestion"),$("#card-list-button").addClass("close-button")}else hideCardSuggestionList()}function setBankLogo(){$(".banklogo").children().remove();var e=document.getElementById("cardnumber").value.replace(/ /g,"");if(e.length>=6){var n=e.substring(0,6);if(isBankLogoAvailable(n)){var t='<img src="'+getBankLogoSrc(n)+'">';$(".banklogo").append(t)}}}function hideCardSuggestionList(){$(".cardnumberbox").removeClass("opensugestion"),$("#card-list-button").removeClass("close-button")}function selectPan(e){if(selectedPanIndex=-1,e<panDtoList.length){var n=panDtoList[e],t=n.maskedPan,a=t.substring(0,4);a+=" "+t.substring(4,6),a+="×× ×××× ",setPan(a+=t.substring(t.length-4,t.length)),selectedPanIndex=e,n.hasExpireDate&&maskExpireDate(),n.email&&$("#inputemail").val(n.email);var o=document.getElementById("inputpin");o.focus(),o.setSelectionRange(0,o.value.length),$("#inputcvv2").val(""),hideCardSuggestionList(),setBankLogo(),checkPanDiscount()}else hideCardSuggestionList(),setBankLogo()}function maskExpireDate(){var e=$("#inputmonth").val("").hide().attr("class"),n=$("#inputyear").val("").hide().attr("class"),t='<input type="password" style="background-color: #FFFFFF" class="'+e+'" tabindex="-1" value="**" onclick="unmaskExpireDate(true)" readonly/>';$("#inputmonth").next().remove(),$(t).insertAfter("#inputmonth");var a='<input type="password" style="background-color: #FFFFFF" class="'+n+'" tabindex="-1" value="**" onclick="unmaskExpireDate(true)" readonly/>';$("#inputyear").next().remove(),$(a).insertAfter("#inputyear")}function unmaskExpireDate(e){$("#inputmonth").next().remove(),$("#inputyear").next().remove(),e?$("#inputmonth").show().focus():$("#inputmonth").show(),$("#inputyear").show()}function isBankLogoAvailable(e){return e=parseInt(e),!!availableBankLogos[e]}function resetSelectedPan(e){if(shouldIgnore(getEventKeyCode(e)))return!0;selectedPanIndex=-1,unmaskExpireDate(!1)}function getBankLogoSrc(e){return"https://bpm.shaparak.ir/pgwchannel/img/bank-logo/"+availableBankLogos[e]+".png"}$(document).ajaxError(handleSaleError),$(window).resize(setCardSuggestionListHeight);