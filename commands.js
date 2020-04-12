!function(e){function t(t){for(var a,i,r=t[0],l=t[1],h=t[2],c=0,d=[];c<r.length;c++)i=r[c],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&d.push(s[i][0]),s[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);for(m&&m(t);d.length;)d.shift()();return n.push.apply(n,h||[]),o()}function o(){for(var e,t=0;t<n.length;t++){for(var o=n[t],a=!0,r=1;r<o.length;r++){var l=o[r];0!==s[l]&&(a=!1)}a&&(n.splice(t--,1),e=i(i.s=o[0]))}return e}var a={},s={1:0},n=[];function i(t){if(a[t])return a[t].exports;var o=a[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=a,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(o,a,function(t){return e[t]}.bind(null,a));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var r=window.webpackJsonp=window.webpackJsonp||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var h=0;h<r.length;h++)t(r[h]);var m=l;n.push([86,0]),o()}({16:function(e){e.exports=JSON.parse('{"general":{"displayName":"General/Misc commands","menuName":"General/Misc","commands":[{"aliases":"list","description":"See who is online","tags":["players","online"]},{"aliases":"ontime","description":"Check your platime stats","tags":["stats"]},{"aliases":"ping","description":"Check your ping time in ms!","tags":["ping","lag"]},{"aliases":"hat","arguments":"<block>","description":"Hat yourself with the block you gave! Only works in creative worlds!","tags":["fun"]}]}}')},17:function(e){e.exports=JSON.parse('{"tp":{"displayName":"Teleport commands","menuName":"Teleport","commands":[{"aliases":"call","arguments":"<user>","description":"Request to teleport **to** the specified player. Said player will have to then accept the teleport request for it to complete.","tags":["teleport","tp"]},{"aliases":["bring","tpa"],"arguments":"<user>","description":"Use this after someone has requested a teleport to you to accept and bring them to your position.","tags":["teleport","tp","bring","tpa"]},{"aliases":["return","back"],"description":"Return to the last location before your last teleport.","tags":["teleport","tp","return","back"]}]}}')},18:function(e){e.exports=JSON.parse('{"chat":{"displayName":"Chat commands","menuName":"Chat","commands":[{"aliases":["msg","message","w","pm","t","tell","whisper"],"arguments":"<target> <message...>","description":"Private message a user.","tags":["chat","pm","reply","msg"]},{"aliases":["r","reply"],"arguments":"<message...>","description":"Shortcut command to reply to private messages. ","tags":["chat","pm","msg"]},{"aliases":"me","arguments":"<message..>","description":"Send an action message.","tags":["chat","action","fun"]}]}}')},19:function(e){e.exports=JSON.parse('{"lwc":{"displayName":"LWC/Chest commands","menuName":"LWC/Chest","commands":[{"aliases":"cpublic","description":"Creates a public protection. Anyone can use a Public protection, but no one can protect it.","tags":["lwc","chest","protection"]},{"aliases":"cpassword","description":"Password-protect a block. Each time you login you need to enter the password to access it. (if someone else knows the password, they can access it too.","tags":["lwc","chest","protection"]},{"aliases":"cprivate","description":"Create a private protection. Private means private: you can also allow other users or groups to access the block as well. This is done by adding them after \\"private\\". You can add more than one group and/or user per command. When you prefix a User or Group with an \'@\', this User/Group will be able to modify the block and add other users. They cannot disable the owner from modifying it.","tags":["lwc","chest","protection"]},{"aliases":"cmodify","description":"Modify an existing protection, adding or removing users and/or groups. See /lwc create, the example for private protections. The same syntax is used for this command. There\'s an additional prefix however. Writing a \'-\' infront of a User or Group removes the access from the block.","tags":["lwc","chest","protection"]},{"aliases":"cunlock","description":"Unlock a password-protected block.","tags":["lwc","chest","protection"]},{"aliases":"cinfo","description":"Punch a protection to view information on it.","tags":["lwc","chest","protection"]},{"aliases":"cremove","description":"Removes protection.","tags":["lwc","chest","protection"]},{"aliases":"climits","description":"View the amount of protections you are allowed.","tags":["lwc","chest","protection"]},{"aliases":"lwc mode persist","arguments":"<on|off>","description":"Persistent mode will let you perform your last command on multiple blocks, untill you turn it off.","tags":["lwc","chest","protection"]},{"aliases":"lwc mode droptransfer","arguments":"<select|on|off|status>","description":"Select: Select the chest drops go to. On: Enable droptransfers. Off: Disable droptransfers. Status: Display the status of the droptransfers. ","tags":["lwc","chest","protection"]}]}}')},20:function(e){e.exports=JSON.parse('{"homesweethome":{"displayName":"HomeSweetHome commands","menuName":"HomeSweetHome","isGroup":true,"description":"So finally we we have HomeSweetHome 2.0 (technically 2.1) on the server. So, what\'s special about this version of HSH, how do you use it, what cool features does it have, and so on. First off, for the most part, if you\'re used to the old HSH, then not much (if any) has changed in how you use the old features. If you only care about that, then everything will continue to work like it always has. For those that want to see what\'s new, and for those that don\'t know how to use HSH, read on.","subgroups":{"hsh_basic":{"displayName":"Basic usage","menuName":"HSH basics","description":"First off, let\'s go over the basics, like how to set a home, and then teleport to that home, delete it, and see the list of all, homes, in addition to going over the interface.","commands":[{"aliases":"home set","arguments":"<homeName>","description":"Use this command to set some home at your current location with `homeName` as it\'s name. Note that `homeName` can have spaces in it. For this reason, the home name for commands is ALWAYS the last argument. If you already have a home named `homeName`, then it will move that home to your new location.","tags":["home","sethome"]},{"aliases":"home","arguments":"[homeName]","description":"Use this command to actually go to your home. You can autocomplete by using tab. If you do not specify a home, it will bring up the home interface (`/home list`).","tags":["home"]},{"aliases":"home delete","arguments":"<homeName>","description":"Use this command to delete a home. Note that this is not reversible.","tags":["home","delete","deletehome","removehome"]},{"aliases":["home list","homes","home"],"arguments":"<homeName>","description":"Use this command to view your current homes. Here is however one of the major things that separate HSH 2.x from both other home plugins and HSH 1.x. While you would expect to just see your homes when you use that, and that is true, but you also get a lot more information and buttons. Buttons in HSH are things that you can click on and that suggests commands to you.\\n\\n![HSH interface](assets/images/commands/hsh_interface.jpg)\\n\\nThe first line here tells you how many homes you can have in total, you can also get this information from the `/home limit` command. On the next line is a button create a new home. You just have to replace `<homeName>` with the desired name.\\n\\nNext are the home list itself, in addition to buttons for teleporting to the home, moving it, inviting someone to it (more on invites later), bringing up residents interface (more on residents later), and finally a button to delete the home.\\n\\n\\nIf there is something you don\'t quite remember how to do, you can most likely use the home interface to do it.","tags":["home","homes","listhomes"]}]},"hsh_invites":{"displayName":"Invites","menuName":"HSH invites","description":"HSH also features invites and requests. Invites is something that the home owner can send to other players, so that they get a one time ticket to that home for a limited amount of time. Requests are the opposite. They allow a normal player to ask to be allowed to go to another player\'s home. Note that tab complete does not work for these commands (that would allow you to see another persons homes, even though they might not want that). Both invites (unless you are a resident, more bellow) and requests can only be used when the home owner is online.","commands":[{"aliases":"home invite","arguments":"<player> <home>","description":"Use this to invite another player to your home. Once they use the invite, they need to get a new one before they can go to the home again.","tags":["home","invite"]},{"aliases":"home goto","arguments":"<user> <home>","description":"This command has two specific meanings, depending on if you have been invited to that home or not.\\n\\n\\nIf you already have been invited to that home, you will teleport to that home, and the invite will be used up.\\n\\nIf you have not been invited to the home before, you instead send a request to the player for that specific home. You then have to wait for the request to be accepted. You can only have one request for each player (Meaning that if you did `/home goto Clownpiece_ HakureiNew`, followed by `/home goto Clownpiece_ HumanNew`, the request for `HakureiNew`, would no longer be valid).","tags":["home","invite","goto","request"]},{"aliases":"home accept","arguments":"<player>","description":"If you have received a request from a player, you can use this to accept the request. Once you do they will be teleported to the home.","tags":["home","accept"]}]},"hsh_residents":{"displayName":"Residents","menuName":"HSH residents","description":"Both invites and requests are a one time thing. They can\'t be reused. What if you have a home that has multiple people living in it? Residents solve this problem, they are like a permanent invite to a home that can also be used when the home owner is offline. For the players that are residents of the home, they use the goto command just like as if it was another invite.","commands":[{"aliases":"home residents","arguments":"[home]","description":"Residents also have a seperate interface similar to the home interface. If you do not specify a home name, you get a overview of all of your homes and their residents. If you specify a home, you get a list off all the residents in that home, in addition to buttons to manipulate this info.","tags":["home","residents"]},{"aliases":"home residents add","arguments":"<home> <player>","description":"Add a player as a resident to a home","tags":["home","residents","addresident"]},{"aliases":"home residents remove","arguments":"<home> <player>","description":"Remove a player as a resident from a home","tags":["home","residents","removeresident"]}]}}}}')},86:function(e,t,o){"use strict";o.r(t);o.p;var a=o(0),s=o.n(a),n=o(15);const i=o.n(n)()({linkify:!0,typographer:!0});function r(e,t,o,a){let n=s()(`<h${3+e} class="scrolltarget">`).text(o.displayName).attr("id","commands-"+t),r=void 0!==o.description?i.render(o.description):null;if(void 0!==o.isGroup&&o.isGroup){let t=s()("<div>"),[i,h]=l(e+1,o.subgroups,a);return i.length?[[n,r,t.append(i)].filter(Boolean),h]:[[],[]]}{let e=o.commands.map(e=>function(e,t){function o(e){return!t||e.toLowerCase().includes(t.toLowerCase())}let a=Array.isArray(e.aliases)?e.aliases:[e.aliases];if(a.some(o)||e.tags.some(o)||o(e.description)){let t="/"+a.join(" | ")+(void 0!==e.arguments?" "+e.arguments:""),o=s()(i.render(e.description));return o.find("img").attr("width","100%"),[s()('<span class="command">').append(s()("<strong>").text(t)),o]}return[]}(e,a)).filter(e=>e.length);return e.length?[[n,r,s()("<ul>").append(e.map(e=>s()("<li>").append(e)))].filter(Boolean),[]]:[[],[]]}}function l(e,t,o){let a=[],n=[];for(let i in t)if(t.hasOwnProperty(i)){let[l,h]=r(e,i,t[i],o);if(l.length){n.push(...l);let e=s()("<li>");if(h.length){let o=s()('<a data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">').attr("href","#commandsSidebar-"+i).text(t[i].menuName),a=s()('<ul class="collapse list-unstyled">').attr("id","commandsSidebar-"+i);a.append(h),e.append(o,a)}else e.append(s()("<a>").attr("href","#commands-"+i).text(t[i].menuName));a.push(e)}}return[n,a]}function h(e,t){let o=s()("#sidebarContent"),a=s()("#commandGroups");o.empty(),a.empty();let[n,i]=l(0,e,t);a.append(n),o.append(i)}var m=o(16),c=o(17),d=o(18),u=o(19),p=o(20);document.addEventListener("DOMContentLoaded",(function(){e={...m,...c,...d,...u,...p},h(e,""),s()("#commandsSearch").on("input",t=>h(e,t.target.value)),$('[data-spy="scroll"]').each((function(){$(this).scrollspy("refresh")}));var e}),!1)}});