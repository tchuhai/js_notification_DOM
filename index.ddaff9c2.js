var e=function(e,t,n,i,a){var o=document.createElement("div");o.classList.add("notification",a),o.style.top=e+"px",o.style.right=t+"px";var s=document.createElement("h2");s.className="title",s.innerHTML=n,s.style.fontSize="18px",o.append(s);var c=document.createElement("p");c.innerHTML=i.replace("\n","</br>"),o.append(c),document.body.append(o),setTimeout(function(){return o.remove()},2e3)};e(10,10,"Title of Success message","Message example.\n Notification should contain title and description.","success"),e(150,10,"Title of Error message","Message example.\n Notification should contain title and description.","error"),e(290,10,"Title of Warning message","Message example.\n Notification should contain title and description.","warning");
//# sourceMappingURL=index.ddaff9c2.js.map
