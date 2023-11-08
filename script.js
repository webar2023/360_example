(function(){
    var script = {
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.Button_485BFF41_598E_3DB2_41A9_33F36E014467], 'gyroscopeAvailable'); this.syncPlaylists([this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist,this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist,this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist,this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist,this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist,this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist,this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); this.playList_BAEBA536_AF13_E6A6_41C4_1CB408CA33C7.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A].forEach(function(component) { component.set('visible', false); }) }",
 "children": [
  "this.MainViewer",
  "this.Container_0C5F33A8_3BA0_A6FF_41C3_2A6652E2CE94",
  "this.Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
  "this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4",
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC"
 ],
 "id": "rootPlayer",
 "paddingLeft": 0,
 "buttonToggleFullscreen": "this.Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A",
 "paddingRight": 0,
 "class": "Player",
 "borderSize": 0,
 "paddingBottom": 0,
 "scrollBarMargin": 2,
 "downloadEnabled": false,
 "minHeight": 20,
 "defaultVRPointer": "laser",
 "width": "100%",
 "scrollBarWidth": 10,
 "scripts": {
  "existsKey": function(key){  return key in window; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "unregisterKey": function(key){  delete window[key]; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getKey": function(key){  return window[key]; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "registerKey": function(key, value){  window[key] = value; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } }
 },
 "contentOpaque": false,
 "verticalAlign": "top",
 "minWidth": 20,
 "buttonToggleMute": "this.Button_4C5C0864_5A8E_C472_41C4_7C0748488A41",
 "desktopMipmappingEnabled": false,
 "gap": 10,
 "definitions": [{
 "duration": 5000,
 "height": 1688,
 "thumbnailUrl": "media/album_BC054606_AEF4_E266_41E2_4612D1C467A2_0_t.jpg",
 "id": "album_BC054606_AEF4_E266_41E2_4612D1C467A2_0",
 "width": 3000,
 "label": "Creamy Yellow Childish Calendar 2023 Calendar_page-0008",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_BC054606_AEF4_E266_41E2_4612D1C467A2_0.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 }
},
{
 "class": "PlayList",
 "items": [
  "this.albumitem_BAD51526_AF13_E6A6_41E0_EAE687ED4471"
 ],
 "id": "playList_BBB2F82A_AEEC_EEAE_41DC_F1385FEB0467",
 "change": "this.showComponentsWhileMouseOver(this.container_BAD56526_AF13_E6A6_41C7_0840B8FE1BFE, [this.htmltext_BAD58526_AF13_E6A6_41DA_B19FD4E41172,this.component_BAD66526_AF13_E6A6_41CA_A10E2046D86D,this.component_BAD65526_AF13_E6A6_41DA_90F2E26A19C4], 2000)"
},
{
 "items": [
  {
   "media": "this.panorama_A5CC183A_AEB1_F1D4_41E3_C8DBC03FEACE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A5CC183A_AEB1_F1D4_41E3_C8DBC03FEACE_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "media": "this.album_BAF2C261_AEB3_048A_41B3_3CB84653342D",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "media": "this.album_A16FDC01_AEEC_665A_41D2_05CD2E62EB33",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "media": "this.album_A15985E7_AEF4_61A6_41A0_06BDF6E342D7",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "media": "this.album_BED3A380_AEF3_E25B_41C8_F7103B3D3318",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "media": "this.album_BF0DE890_AEFD_EE7B_418A_7985CA64AC68",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "media": "this.album_BCE121E6_AEFF_A1A7_41D4_767447BDFD6C",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "media": "this.album_BE20707D_AEF5_9EAA_41D7_A89337166D82",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "media": "this.album_BC054606_AEF4_E266_41E2_4612D1C467A2",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "media": "this.album_BCD5AD6C_AEF5_A6AA_41BE_946CB7071D34",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "media": "this.album_BC9A9C53_AEF3_A6FE_41D8_F798402EAFB5",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "media": "this.album_BF876CE6_AEEC_67A6_41E4_F0A11BCE9BA9",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "media": "this.album_BDC825C0_AEEC_A1DA_41E4_E28DB43D7F44",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "media": "this.album_BC069925_AEEF_AE5A_41CD_AF5B19FDD624",
   "end": "this.trigger('tourEnded')",
   "class": "PhotoAlbumPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 0)",
   "player": "this.MainViewerPhotoAlbumPlayer"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "class": "PlayList",
 "items": [
  "this.albumitem_BADD2536_AF13_E6A6_41DA_14CD9B44F228"
 ],
 "id": "playList_BBAC283A_AEEC_EEAE_4151_CFFF967B27EB",
 "change": "this.showComponentsWhileMouseOver(this.container_BAE41536_AF13_E6A6_419E_98E9DE4F296A, [this.htmltext_BAE45536_AF13_E6A6_41BA_A1E1DF297F33,this.component_BAE53536_AF13_E6A6_41B4_F8C59BF34442,this.component_BAE52536_AF13_E6A6_41E4_A8C5A9B4DCA3], 2000)"
},
{
 "width": 3000,
 "fieldOfViewOverlayOutsideColor": "#000000",
 "fieldOfViewOverlayOutsideOpacity": 0,
 "image": {
  "levels": [
   {
    "url": "media/map_A1A3B91B_AEBF_04BE_41C1_8995D99EE892.jpeg",
    "width": 3000,
    "class": "ImageResourceLevel",
    "height": 1688
   },
   {
    "url": "media/map_A1A3B91B_AEBF_04BE_41C1_8995D99EE892_lq.jpeg",
    "width": 341,
    "tags": "preload",
    "class": "ImageResourceLevel",
    "height": 192
   }
  ],
  "class": "ImageResource"
 },
 "thumbnailUrl": "media/map_A1A3B91B_AEBF_04BE_41C1_8995D99EE892_t.jpg",
 "id": "map_A1A3B91B_AEBF_04BE_41C1_8995D99EE892",
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "fieldOfViewOverlayRadiusScale": 0.3,
 "maximumZoomFactor": 1.2,
 "scaleMode": "fit_inside",
 "class": "Map",
 "minimumZoomFactor": 0.5,
 "initialZoomFactor": 1,
 "label": "Creamy Yellow Childish Calendar 2023 Calendar_page-0005",
 "height": 1688
},
{
 "duration": 5000,
 "height": 1688,
 "thumbnailUrl": "media/album_BDC825C0_AEEC_A1DA_41E4_E28DB43D7F44_0_t.jpg",
 "id": "album_BDC825C0_AEEC_A1DA_41E4_E28DB43D7F44_0",
 "width": 3000,
 "label": "Creamy Yellow Childish Calendar 2023 Calendar_page-0012",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_BDC825C0_AEEC_A1DA_41E4_E28DB43D7F44_0.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 }
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_A1A39AD3_AEBF_058D_41E3_0783FB3C64DE",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_BAEB8536_AF13_E6A6_41DE_97B087ADE344",
 "class": "PlayList"
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_A1A237CB_AEBF_0B9E_4199_9580A2B83CBC",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_BAEB6536_AF13_E6A6_41D8_C9525B250CBF",
 "class": "PlayList"
},
{
 "class": "PlayList",
 "items": [
  "this.albumitem_BAD91526_AF13_E6A6_41DB_6F707DF759DE"
 ],
 "id": "playList_BBB0C82A_AEEC_EEAE_41D5_35F7E8339A5F",
 "change": "this.showComponentsWhileMouseOver(this.container_BAD94536_AF13_E6A6_41C7_4C200D8D5A28, [this.htmltext_BAD9E536_AF13_E6A6_41E5_D9F4646D6909,this.component_BADA5536_AF13_E6A6_41E0_E7BA09632F10,this.component_BADA4536_AF13_E6A6_41DB_59BE0F819A05], 2000)"
},
{
 "shadowVerticalLength": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "id": "window_BCC84682_AEEF_A25E_41E4_7BD29B08AFBB",
 "bodyBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "class": "Window",
 "paddingBottom": 0,
 "bodyPaddingRight": 0,
 "bodyBackgroundOpacity": 0,
 "titlePaddingLeft": 5,
 "minHeight": 20,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "modal": true,
 "headerVerticalAlign": "middle",
 "bodyPaddingTop": 0,
 "shadowSpread": 1,
 "titleFontColor": "#000000",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "verticalAlign": "middle",
 "minWidth": 20,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontSize": "1.29vmin",
 "headerBackgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "backgroundColor": [],
 "horizontalAlign": "center",
 "title": "",
 "bodyPaddingBottom": 0,
 "titleFontWeight": "normal",
 "overflow": "scroll",
 "closeButtonPressedIconLineWidth": 3,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "veilOpacity": 0.4,
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "veilColorDirection": "horizontal",
 "titlePaddingTop": 5,
 "footerHeight": 5,
 "headerBorderSize": 0,
 "closeButtonBackgroundColor": [],
 "shadow": true,
 "closeButtonPressedBackgroundColor": [],
 "footerBackgroundOpacity": 0,
 "propagateClick": false,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerPaddingRight": 0,
 "footerBackgroundColorDirection": "vertical",
 "titlePaddingRight": 5,
 "children": [
  "this.container_BAEA3536_AF13_E6A6_41E0_CBC2E0AD9CB5"
 ],
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "borderSize": 0,
 "titleFontStyle": "normal",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "headerPaddingBottom": 5,
 "closeButtonIconHeight": 20,
 "contentOpaque": false,
 "closeButtonIconColor": "#B2B2B2",
 "shadowHorizontalLength": 3,
 "scrollBarWidth": 10,
 "titleFontFamily": "Arial",
 "headerBorderColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "shadowBlurRadius": 6,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "headerPaddingTop": 10,
 "closeButtonBorderRadius": 11,
 "headerPaddingLeft": 10,
 "gap": 10,
 "shadowOpacity": 0.5,
 "closeButtonBackgroundColorRatios": [],
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonRollOverBackgroundColor": [],
 "borderRadius": 5,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyPaddingLeft": 0,
 "layout": "vertical",
 "headerBackgroundOpacity": 0,
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "data": {
  "name": "Window18978"
 },
 "backgroundColorRatios": [],
 "closeButtonIconLineWidth": 2,
 "titlePaddingBottom": 5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "closeButtonIconWidth": 20,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ]
},
{
 "thumbnailUrl": "media/album_BC9A9C53_AEF3_A6FE_41D8_F798402EAFB5_t.png",
 "id": "album_BC9A9C53_AEF3_A6FE_41D8_F798402EAFB5",
 "playList": "this.album_BC9A9C53_AEF3_A6FE_41D8_F798402EAFB5_AlbumPlayList",
 "label": "Photo Album Creamy Yellow Childish Calendar 2023 Calendar_page-0010",
 "class": "PhotoAlbum"
},
{
 "thumbnailUrl": "media/album_BCE121E6_AEFF_A1A7_41D4_767447BDFD6C_t.png",
 "id": "album_BCE121E6_AEFF_A1A7_41D4_767447BDFD6C",
 "playList": "this.album_BCE121E6_AEFF_A1A7_41D4_767447BDFD6C_AlbumPlayList",
 "label": "Photo Album Creamy Yellow Childish Calendar 2023 Calendar_page-0006",
 "class": "PhotoAlbum"
},
{
 "shadowVerticalLength": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "id": "window_BF7FE941_AEF5_EEDA_419E_4DA4E0285EFF",
 "bodyBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "class": "Window",
 "paddingBottom": 0,
 "bodyPaddingRight": 0,
 "bodyBackgroundOpacity": 0,
 "titlePaddingLeft": 5,
 "minHeight": 20,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "modal": true,
 "headerVerticalAlign": "middle",
 "bodyPaddingTop": 0,
 "shadowSpread": 1,
 "titleFontColor": "#000000",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "verticalAlign": "middle",
 "minWidth": 20,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontSize": "1.29vmin",
 "headerBackgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "backgroundColor": [],
 "horizontalAlign": "center",
 "title": "",
 "bodyPaddingBottom": 0,
 "titleFontWeight": "normal",
 "overflow": "scroll",
 "closeButtonPressedIconLineWidth": 3,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "veilOpacity": 0.4,
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "veilColorDirection": "horizontal",
 "titlePaddingTop": 5,
 "footerHeight": 5,
 "headerBorderSize": 0,
 "closeButtonBackgroundColor": [],
 "shadow": true,
 "closeButtonPressedBackgroundColor": [],
 "footerBackgroundOpacity": 0,
 "propagateClick": false,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerPaddingRight": 0,
 "footerBackgroundColorDirection": "vertical",
 "titlePaddingRight": 5,
 "children": [
  "this.container_BADB6536_AF13_E6A6_41E0_15C7597D2859"
 ],
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "borderSize": 0,
 "titleFontStyle": "normal",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "headerPaddingBottom": 5,
 "closeButtonIconHeight": 20,
 "contentOpaque": false,
 "closeButtonIconColor": "#B2B2B2",
 "shadowHorizontalLength": 3,
 "scrollBarWidth": 10,
 "titleFontFamily": "Arial",
 "headerBorderColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "shadowBlurRadius": 6,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "headerPaddingTop": 10,
 "closeButtonBorderRadius": 11,
 "headerPaddingLeft": 10,
 "gap": 10,
 "shadowOpacity": 0.5,
 "closeButtonBackgroundColorRatios": [],
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonRollOverBackgroundColor": [],
 "borderRadius": 5,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyPaddingLeft": 0,
 "layout": "vertical",
 "headerBackgroundOpacity": 0,
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "data": {
  "name": "Window12694"
 },
 "backgroundColorRatios": [],
 "closeButtonIconLineWidth": 2,
 "titlePaddingBottom": 5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "closeButtonIconWidth": 20,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ]
},
{
 "shadowVerticalLength": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "id": "window_BF27474A_AEF5_A2EE_41E5_590F6D0E026B",
 "bodyBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "class": "Window",
 "paddingBottom": 0,
 "bodyPaddingRight": 0,
 "bodyBackgroundOpacity": 0,
 "titlePaddingLeft": 5,
 "minHeight": 20,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "modal": true,
 "headerVerticalAlign": "middle",
 "bodyPaddingTop": 0,
 "shadowSpread": 1,
 "titleFontColor": "#000000",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "verticalAlign": "middle",
 "minWidth": 20,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontSize": "1.29vmin",
 "headerBackgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "backgroundColor": [],
 "horizontalAlign": "center",
 "title": "",
 "bodyPaddingBottom": 0,
 "titleFontWeight": "normal",
 "overflow": "scroll",
 "closeButtonPressedIconLineWidth": 3,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "veilOpacity": 0.4,
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "veilColorDirection": "horizontal",
 "titlePaddingTop": 5,
 "footerHeight": 5,
 "headerBorderSize": 0,
 "closeButtonBackgroundColor": [],
 "shadow": true,
 "closeButtonPressedBackgroundColor": [],
 "footerBackgroundOpacity": 0,
 "propagateClick": false,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerPaddingRight": 0,
 "footerBackgroundColorDirection": "vertical",
 "titlePaddingRight": 5,
 "children": [
  "this.container_BAD13526_AF13_E6A6_418D_4528468393EB"
 ],
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "borderSize": 0,
 "titleFontStyle": "normal",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "headerPaddingBottom": 5,
 "closeButtonIconHeight": 20,
 "contentOpaque": false,
 "closeButtonIconColor": "#B2B2B2",
 "shadowHorizontalLength": 3,
 "scrollBarWidth": 10,
 "titleFontFamily": "Arial",
 "headerBorderColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "shadowBlurRadius": 6,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "headerPaddingTop": 10,
 "closeButtonBorderRadius": 11,
 "headerPaddingLeft": 10,
 "gap": 10,
 "shadowOpacity": 0.5,
 "closeButtonBackgroundColorRatios": [],
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonRollOverBackgroundColor": [],
 "borderRadius": 5,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyPaddingLeft": 0,
 "layout": "vertical",
 "headerBackgroundOpacity": 0,
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "data": {
  "name": "Window5404"
 },
 "backgroundColorRatios": [],
 "closeButtonIconLineWidth": 2,
 "titlePaddingBottom": 5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "closeButtonIconWidth": 20,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ]
},
{
 "thumbnailUrl": "media/album_BDC825C0_AEEC_A1DA_41E4_E28DB43D7F44_t.png",
 "id": "album_BDC825C0_AEEC_A1DA_41E4_E28DB43D7F44",
 "playList": "this.album_BDC825C0_AEEC_A1DA_41E4_E28DB43D7F44_AlbumPlayList",
 "label": "Photo Album Creamy Yellow Childish Calendar 2023 Calendar_page-0012",
 "class": "PhotoAlbum"
},
{
 "duration": 5000,
 "height": 1688,
 "thumbnailUrl": "media/album_BE20707D_AEF5_9EAA_41D7_A89337166D82_0_t.jpg",
 "id": "album_BE20707D_AEF5_9EAA_41D7_A89337166D82_0",
 "width": 3000,
 "label": "Creamy Yellow Childish Calendar 2023 Calendar_page-0007",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_BE20707D_AEF5_9EAA_41D7_A89337166D82_0.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 }
},
{
 "duration": 5000,
 "height": 1688,
 "thumbnailUrl": "media/album_BCD5AD6C_AEF5_A6AA_41BE_946CB7071D34_0_t.jpg",
 "id": "album_BCD5AD6C_AEF5_A6AA_41BE_946CB7071D34_0",
 "width": 3000,
 "label": "Creamy Yellow Childish Calendar 2023 Calendar_page-0009",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_BCD5AD6C_AEF5_A6AA_41BE_946CB7071D34_0.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 }
},
{
 "class": "PlayList",
 "items": [
  "this.albumitem_BAE7E536_AF13_E6A6_41E2_A3139798DFCB"
 ],
 "id": "playList_BBABF83A_AEEC_EEAE_41E3_473F03B45DF3",
 "change": "this.showComponentsWhileMouseOver(this.container_BAE80536_AF13_E6A6_41E2_30F8DEC547BE, [this.htmltext_BAE8B536_AF13_E6A6_41E2_B6C3B8B8E1A5,this.component_BAE91536_AF13_E6A6_41C7_8469CF09CC58,this.component_BAE97536_AF13_E6A6_41D1_5EBBA2369620], 2000)"
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_A11D7081_AEBF_058D_41E1_5D6341AB0591",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_BAEC7536_AF13_E6A6_41BD_6D6DD5DB656A",
 "class": "PlayList"
},
{
 "width": 3000,
 "fieldOfViewOverlayOutsideColor": "#000000",
 "fieldOfViewOverlayOutsideOpacity": 0,
 "image": {
  "levels": [
   {
    "url": "media/map_A1A209F7_AEBF_0775_41D1_172BC90107B2.jpeg",
    "width": 3000,
    "class": "ImageResourceLevel",
    "height": 1688
   },
   {
    "url": "media/map_A1A209F7_AEBF_0775_41D1_172BC90107B2_lq.jpeg",
    "width": 341,
    "tags": "preload",
    "class": "ImageResourceLevel",
    "height": 192
   }
  ],
  "class": "ImageResource"
 },
 "thumbnailUrl": "media/map_A1A209F7_AEBF_0775_41D1_172BC90107B2_t.jpg",
 "id": "map_A1A209F7_AEBF_0775_41D1_172BC90107B2",
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "fieldOfViewOverlayRadiusScale": 0.3,
 "maximumZoomFactor": 1.2,
 "scaleMode": "fit_inside",
 "class": "Map",
 "minimumZoomFactor": 0.5,
 "initialZoomFactor": 1,
 "label": "Creamy Yellow Childish Calendar 2023 Calendar_page-0006",
 "height": 1688
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_A1A3B91B_AEBF_04BE_41C1_8995D99EE892",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_BAEDF536_AF13_E6A6_41E3_A01CB6615370",
 "class": "PlayList"
},
{
 "duration": 5000,
 "height": 1688,
 "thumbnailUrl": "media/album_BF876CE6_AEEC_67A6_41E4_F0A11BCE9BA9_0_t.jpg",
 "id": "album_BF876CE6_AEEC_67A6_41E4_F0A11BCE9BA9_0",
 "width": 3000,
 "label": "Creamy Yellow Childish Calendar 2023 Calendar_page-0011",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_BF876CE6_AEEC_67A6_41E4_F0A11BCE9BA9_0.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 }
},
{
 "class": "PlayList",
 "items": [
  "this.albumitem_BAE9D536_AF13_E6A6_41E1_05DC1E983C7C"
 ],
 "id": "playList_BBA9D83A_AEEC_EEAE_41E4_29415377B4CE",
 "change": "this.showComponentsWhileMouseOver(this.container_BAEA3536_AF13_E6A6_41E0_CBC2E0AD9CB5, [this.htmltext_BAEAB536_AF13_E6A6_41A9_DCB6DE960340,this.component_BAEB2536_AF13_E6A6_41A9_A35182525562,this.component_BAEB1536_AF13_E6A6_41E4_CB51D56747B0], 2000)"
},
{
 "thumbnailUrl": "media/album_A16FDC01_AEEC_665A_41D2_05CD2E62EB33_t.png",
 "id": "album_A16FDC01_AEEC_665A_41D2_05CD2E62EB33",
 "playList": "this.album_A16FDC01_AEEC_665A_41D2_05CD2E62EB33_AlbumPlayList",
 "label": "Photo Album Creamy Yellow Childish Calendar 2023 Calendar_page-0002",
 "class": "PhotoAlbum"
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_A1A237CB_AEBF_0B9E_4199_9580A2B83CBC",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_BAEDA536_AF13_E6A6_41CD_F13CBA124BE6",
 "class": "PlayList"
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_A1A3DCAB_AEBF_3D9D_41D1_6270BED3A542",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_BAEEA545_AF13_E6DA_41D5_E16D64BEB28A",
 "class": "PlayList"
},
{
 "shadowVerticalLength": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "id": "window_BF12DE80_AEF4_625A_41D6_175056FCD1F2",
 "bodyBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "class": "Window",
 "paddingBottom": 0,
 "bodyPaddingRight": 0,
 "bodyBackgroundOpacity": 0,
 "titlePaddingLeft": 5,
 "minHeight": 20,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "modal": true,
 "headerVerticalAlign": "middle",
 "bodyPaddingTop": 0,
 "shadowSpread": 1,
 "titleFontColor": "#000000",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "verticalAlign": "middle",
 "minWidth": 20,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontSize": "1.29vmin",
 "headerBackgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "backgroundColor": [],
 "horizontalAlign": "center",
 "title": "",
 "bodyPaddingBottom": 0,
 "titleFontWeight": "normal",
 "overflow": "scroll",
 "closeButtonPressedIconLineWidth": 3,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "veilOpacity": 0.4,
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "veilColorDirection": "horizontal",
 "titlePaddingTop": 5,
 "footerHeight": 5,
 "headerBorderSize": 0,
 "closeButtonBackgroundColor": [],
 "shadow": true,
 "closeButtonPressedBackgroundColor": [],
 "footerBackgroundOpacity": 0,
 "propagateClick": false,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerPaddingRight": 0,
 "footerBackgroundColorDirection": "vertical",
 "titlePaddingRight": 5,
 "children": [
  "this.container_BAD94536_AF13_E6A6_41C7_4C200D8D5A28"
 ],
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "borderSize": 0,
 "titleFontStyle": "normal",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "headerPaddingBottom": 5,
 "closeButtonIconHeight": 20,
 "contentOpaque": false,
 "closeButtonIconColor": "#B2B2B2",
 "shadowHorizontalLength": 3,
 "scrollBarWidth": 10,
 "titleFontFamily": "Arial",
 "headerBorderColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "shadowBlurRadius": 6,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "headerPaddingTop": 10,
 "closeButtonBorderRadius": 11,
 "headerPaddingLeft": 10,
 "gap": 10,
 "shadowOpacity": 0.5,
 "closeButtonBackgroundColorRatios": [],
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonRollOverBackgroundColor": [],
 "borderRadius": 5,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyPaddingLeft": 0,
 "layout": "vertical",
 "headerBackgroundOpacity": 0,
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "data": {
  "name": "Window11370"
 },
 "backgroundColorRatios": [],
 "closeButtonIconLineWidth": 2,
 "titlePaddingBottom": 5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "closeButtonIconWidth": 20,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ]
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_A11D7081_AEBF_058D_41E1_5D6341AB0591",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_BAEBA536_AF13_E6A6_41C4_1CB408CA33C7",
 "class": "PlayList"
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_A1A213B2_AEBF_0B8E_41E5_4DA1B4980A11",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_BAECF536_AF13_E6A6_41D3_7DFB9452F428",
 "class": "PlayList"
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_A1A3DCAB_AEBF_3D9D_41D1_6270BED3A542",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_BAEC2536_AF13_E6A6_41D4_BA55412F0BDF",
 "class": "PlayList"
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_A1A3C57A_AEBF_0F7F_41D0_953786F69D68",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_BAEAD536_AF13_E6A6_41C6_8D8B57109A5E",
 "class": "PlayList"
},
{
 "width": 3000,
 "fieldOfViewOverlayOutsideColor": "#000000",
 "fieldOfViewOverlayOutsideOpacity": 0,
 "image": {
  "levels": [
   {
    "url": "media/map_A106F1AC_AEBF_079A_41C6_2F92FF7CDBE6.jpeg",
    "width": 3000,
    "class": "ImageResourceLevel",
    "height": 1688
   },
   {
    "url": "media/map_A106F1AC_AEBF_079A_41C6_2F92FF7CDBE6_lq.jpeg",
    "width": 341,
    "tags": "preload",
    "class": "ImageResourceLevel",
    "height": 192
   }
  ],
  "class": "ImageResource"
 },
 "thumbnailUrl": "media/map_A106F1AC_AEBF_079A_41C6_2F92FF7CDBE6_t.jpg",
 "id": "map_A106F1AC_AEBF_079A_41C6_2F92FF7CDBE6",
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "fieldOfViewOverlayRadiusScale": 0.3,
 "maximumZoomFactor": 1.2,
 "scaleMode": "fit_inside",
 "class": "Map",
 "minimumZoomFactor": 0.5,
 "initialZoomFactor": 1,
 "label": "Creamy Yellow Childish Calendar 2023 Calendar_page-0013",
 "height": 1688
},
{
 "class": "PlayList",
 "items": [
  "this.albumitem_BAE58536_AF13_E6A6_41E4_DA423DC4E233"
 ],
 "id": "playList_BBAD983A_AEEC_EEAE_41E4_FAE7C75E411B",
 "change": "this.showComponentsWhileMouseOver(this.container_BAE5C536_AF13_E6A6_41DE_7E09373885E5, [this.htmltext_BAE66536_AF13_E6A6_41DE_C1E037962704,this.component_BAE71536_AF13_E6A6_41DD_61D8AABECDC7,this.component_BAE70536_AF13_E6A6_41BD_2E5CD1CC5336], 2000)"
},
{
 "duration": 5000,
 "height": 1688,
 "thumbnailUrl": "media/album_BC069925_AEEF_AE5A_41CD_AF5B19FDD624_0_t.jpg",
 "id": "album_BC069925_AEEF_AE5A_41CD_AF5B19FDD624_0",
 "width": 3000,
 "label": "Creamy Yellow Childish Calendar 2023 Calendar_page-0013",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_BC069925_AEEF_AE5A_41CD_AF5B19FDD624_0.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 }
},
{
 "class": "PlayList",
 "items": [
  "this.albumitem_BACED526_AF13_E6A6_41E3_DC9BF884463A"
 ],
 "id": "playList_BBC2B81A_AEEC_EE6F_41E4_9F2C8C73A9C2",
 "change": "this.showComponentsWhileMouseOver(this.container_BACF2526_AF13_E6A6_41B5_903CABE88D37, [this.htmltext_BACF5526_AF13_E6A6_41D6_71D2214A4A4F,this.component_BAD02526_AF13_E6A6_41D1_1BF5F3369CCF,this.component_BAD01526_AF13_E6A6_41E4_228DD34C5A64], 2000)"
},
{
 "items": [
  {
   "media": "this.panorama_A5CC183A_AEB1_F1D4_41E3_C8DBC03FEACE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A5CC183A_AEB1_F1D4_41E3_C8DBC03FEACE_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 1, 2)",
   "media": "this.album_BAF2C261_AEB3_048A_41B3_3CB84653342D",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 2, 3)",
   "media": "this.album_A16FDC01_AEEC_665A_41D2_05CD2E62EB33",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 3, 4)",
   "media": "this.album_A15985E7_AEF4_61A6_41A0_06BDF6E342D7",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 4, 5)",
   "media": "this.album_BED3A380_AEF3_E25B_41C8_F7103B3D3318",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 5, 6)",
   "media": "this.album_BF0DE890_AEFD_EE7B_418A_7985CA64AC68",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 6, 7)",
   "media": "this.album_BCE121E6_AEFF_A1A7_41D4_767447BDFD6C",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 7, 8)",
   "media": "this.album_BE20707D_AEF5_9EAA_41D7_A89337166D82",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 8, 9)",
   "media": "this.album_BC054606_AEF4_E266_41E2_4612D1C467A2",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 9, 10)",
   "media": "this.album_BCD5AD6C_AEF5_A6AA_41BE_946CB7071D34",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 10, 11)",
   "media": "this.album_BC9A9C53_AEF3_A6FE_41D8_F798402EAFB5",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 11, 12)",
   "media": "this.album_BF876CE6_AEEC_67A6_41E4_F0A11BCE9BA9",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 12, 13)",
   "media": "this.album_BDC825C0_AEEC_A1DA_41E4_E28DB43D7F44",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 13, 0)",
   "media": "this.album_BC069925_AEEF_AE5A_41CD_AF5B19FDD624",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  }
 ],
 "id": "DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist",
 "class": "PlayList"
},
{
 "width": 3000,
 "fieldOfViewOverlayOutsideColor": "#000000",
 "fieldOfViewOverlayOutsideOpacity": 0,
 "image": {
  "levels": [
   {
    "url": "media/map_A1A3C57A_AEBF_0F7F_41D0_953786F69D68.jpeg",
    "width": 3000,
    "class": "ImageResourceLevel",
    "height": 1688
   },
   {
    "url": "media/map_A1A3C57A_AEBF_0F7F_41D0_953786F69D68_lq.jpeg",
    "width": 341,
    "tags": "preload",
    "class": "ImageResourceLevel",
    "height": 192
   }
  ],
  "class": "ImageResource"
 },
 "thumbnailUrl": "media/map_A1A3C57A_AEBF_0F7F_41D0_953786F69D68_t.jpg",
 "id": "map_A1A3C57A_AEBF_0F7F_41D0_953786F69D68",
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "fieldOfViewOverlayRadiusScale": 0.3,
 "maximumZoomFactor": 1.2,
 "scaleMode": "fit_inside",
 "class": "Map",
 "minimumZoomFactor": 0.5,
 "initialZoomFactor": 1,
 "label": "Creamy Yellow Childish Calendar 2023 Calendar_page-0011",
 "height": 1688
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_A1A3DBC0_AEBF_3B8A_41C9_48EE11330ECC",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_BAEE7545_AF13_E6DA_41D7_048C591465B9",
 "class": "PlayList"
},
{
 "class": "PlayList",
 "items": [
  "this.albumitem_BADB1536_AF13_E6A6_41DF_7C1049F37125"
 ],
 "id": "playList_BBAED82A_AEEC_EEAE_41E2_787CB9347141",
 "change": "this.showComponentsWhileMouseOver(this.container_BADB6536_AF13_E6A6_41E0_15C7597D2859, [this.htmltext_BADB9536_AF13_E6A6_41D3_D25DED52E319,this.component_BADC6536_AF13_E6A6_41A3_2AE8DBF01255,this.component_BADC4536_AF13_E6A6_41E2_327C65C61CBB], 2000)"
},
{
 "width": 3000,
 "fieldOfViewOverlayOutsideColor": "#000000",
 "fieldOfViewOverlayOutsideOpacity": 0,
 "image": {
  "levels": [
   {
    "url": "media/map_A1A366D5_AEBF_0DB5_41D7_3FDC7A18230A.jpeg",
    "width": 3000,
    "class": "ImageResourceLevel",
    "height": 1688
   },
   {
    "url": "media/map_A1A366D5_AEBF_0DB5_41D7_3FDC7A18230A_lq.jpeg",
    "width": 341,
    "tags": "preload",
    "class": "ImageResourceLevel",
    "height": 192
   }
  ],
  "class": "ImageResource"
 },
 "thumbnailUrl": "media/map_A1A366D5_AEBF_0DB5_41D7_3FDC7A18230A_t.jpg",
 "id": "map_A1A366D5_AEBF_0DB5_41D7_3FDC7A18230A",
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "fieldOfViewOverlayRadiusScale": 0.3,
 "maximumZoomFactor": 1.2,
 "scaleMode": "fit_inside",
 "class": "Map",
 "minimumZoomFactor": 0.5,
 "initialZoomFactor": 1,
 "label": "Creamy Yellow Childish Calendar 2023 Calendar_page-0003",
 "height": 1688
},
{
 "shadowVerticalLength": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "id": "window_BCA37F1B_AEEC_E26E_41CE_2E91482B4AD5",
 "bodyBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "class": "Window",
 "paddingBottom": 0,
 "bodyPaddingRight": 0,
 "bodyBackgroundOpacity": 0,
 "titlePaddingLeft": 5,
 "minHeight": 20,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "modal": true,
 "headerVerticalAlign": "middle",
 "bodyPaddingTop": 0,
 "shadowSpread": 1,
 "titleFontColor": "#000000",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "verticalAlign": "middle",
 "minWidth": 20,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontSize": "1.29vmin",
 "headerBackgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "backgroundColor": [],
 "horizontalAlign": "center",
 "title": "",
 "bodyPaddingBottom": 0,
 "titleFontWeight": "normal",
 "overflow": "scroll",
 "closeButtonPressedIconLineWidth": 3,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "veilOpacity": 0.4,
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "veilColorDirection": "horizontal",
 "titlePaddingTop": 5,
 "footerHeight": 5,
 "headerBorderSize": 0,
 "closeButtonBackgroundColor": [],
 "shadow": true,
 "closeButtonPressedBackgroundColor": [],
 "footerBackgroundOpacity": 0,
 "propagateClick": false,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerPaddingRight": 0,
 "footerBackgroundColorDirection": "vertical",
 "titlePaddingRight": 5,
 "children": [
  "this.container_BAE80536_AF13_E6A6_41E2_30F8DEC547BE"
 ],
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "borderSize": 0,
 "titleFontStyle": "normal",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "headerPaddingBottom": 5,
 "closeButtonIconHeight": 20,
 "contentOpaque": false,
 "closeButtonIconColor": "#B2B2B2",
 "shadowHorizontalLength": 3,
 "scrollBarWidth": 10,
 "titleFontFamily": "Arial",
 "headerBorderColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "shadowBlurRadius": 6,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "headerPaddingTop": 10,
 "closeButtonBorderRadius": 11,
 "headerPaddingLeft": 10,
 "gap": 10,
 "shadowOpacity": 0.5,
 "closeButtonBackgroundColorRatios": [],
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonRollOverBackgroundColor": [],
 "borderRadius": 5,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyPaddingLeft": 0,
 "layout": "vertical",
 "headerBackgroundOpacity": 0,
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "data": {
  "name": "Window18097"
 },
 "backgroundColorRatios": [],
 "closeButtonIconLineWidth": 2,
 "titlePaddingBottom": 5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "closeButtonIconWidth": 20,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ]
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_A1A3DBC0_AEBF_3B8A_41C9_48EE11330ECC",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_BAEBC536_AF13_E6A6_41DA_EF9CD3A27EAB",
 "class": "PlayList"
},
{
 "width": 3000,
 "fieldOfViewOverlayOutsideColor": "#000000",
 "fieldOfViewOverlayOutsideOpacity": 0,
 "image": {
  "levels": [
   {
    "url": "media/map_A1A39AD3_AEBF_058D_41E3_0783FB3C64DE.jpeg",
    "width": 3000,
    "class": "ImageResourceLevel",
    "height": 1688
   },
   {
    "url": "media/map_A1A39AD3_AEBF_058D_41E3_0783FB3C64DE_lq.jpeg",
    "width": 341,
    "tags": "preload",
    "class": "ImageResourceLevel",
    "height": 192
   }
  ],
  "class": "ImageResource"
 },
 "thumbnailUrl": "media/map_A1A39AD3_AEBF_058D_41E3_0783FB3C64DE_t.jpg",
 "id": "map_A1A39AD3_AEBF_058D_41E3_0783FB3C64DE",
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "fieldOfViewOverlayRadiusScale": 0.3,
 "maximumZoomFactor": 1.2,
 "scaleMode": "fit_inside",
 "class": "Map",
 "minimumZoomFactor": 0.5,
 "initialZoomFactor": 1,
 "label": "Creamy Yellow Childish Calendar 2023 Calendar_page-0007",
 "height": 1688
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_A1A209F7_AEBF_0775_41D1_172BC90107B2",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_BAEDC536_AF13_E6A6_41E4_A48EB15009FA",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -28.64,
  "class": "PanoramaCameraPosition",
  "pitch": -16.08
 },
 "id": "panorama_A5CC183A_AEB1_F1D4_41E3_C8DBC03FEACE_camera",
 "class": "PanoramaCamera"
},
{
 "class": "PlayList",
 "items": [
  "this.albumitem_BAD0E526_AF13_E6A6_41B5_B0A7960EF6FB"
 ],
 "id": "playList_BBB6882A_AEEC_EEAE_41CC_305E5AE27E72",
 "change": "this.showComponentsWhileMouseOver(this.container_BAD13526_AF13_E6A6_418D_4528468393EB, [this.htmltext_BAD16526_AF13_E6A6_41CB_4F0A2D4FD5B6,this.component_BAD1D526_AF13_E6A6_41D3_DBDBCCC7E949,this.component_BAD1C526_AF13_E6A6_41DA_6DA447220A46], 2000)"
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_A1A252B6_AEBF_05F7_41C2_8B669EF117CC",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_BAEC8536_AF13_E6A6_41D9_603B09A2BEBB",
 "class": "PlayList"
},
{
 "items": [
  {
   "media": "this.panorama_A5CC183A_AEB1_F1D4_41E3_C8DBC03FEACE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A5CC183A_AEB1_F1D4_41E3_C8DBC03FEACE_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "media": "this.album_BAF2C261_AEB3_048A_41B3_3CB84653342D",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "media": "this.album_A16FDC01_AEEC_665A_41D2_05CD2E62EB33",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "media": "this.album_A15985E7_AEF4_61A6_41A0_06BDF6E342D7",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "media": "this.album_BED3A380_AEF3_E25B_41C8_F7103B3D3318",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "media": "this.album_BF0DE890_AEFD_EE7B_418A_7985CA64AC68",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "media": "this.album_BCE121E6_AEFF_A1A7_41D4_767447BDFD6C",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "media": "this.album_BE20707D_AEF5_9EAA_41D7_A89337166D82",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "media": "this.album_BC054606_AEF4_E266_41E2_4612D1C467A2",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "media": "this.album_BCD5AD6C_AEF5_A6AA_41BE_946CB7071D34",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "media": "this.album_BC9A9C53_AEF3_A6FE_41D8_F798402EAFB5",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "media": "this.album_BF876CE6_AEEC_67A6_41E4_F0A11BCE9BA9",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13)",
   "media": "this.album_BDC825C0_AEEC_A1DA_41E4_E28DB43D7F44",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 0)",
   "media": "this.album_BC069925_AEEF_AE5A_41CD_AF5B19FDD624",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPhotoAlbumPlayer",
 "buttonPrevious": "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "class": "PhotoAlbumPlayer",
 "buttonNext": "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510"
},
{
 "thumbnailUrl": "media/album_BF876CE6_AEEC_67A6_41E4_F0A11BCE9BA9_t.png",
 "id": "album_BF876CE6_AEEC_67A6_41E4_F0A11BCE9BA9",
 "playList": "this.album_BF876CE6_AEEC_67A6_41E4_F0A11BCE9BA9_AlbumPlayList",
 "label": "Photo Album Creamy Yellow Childish Calendar 2023 Calendar_page-0011",
 "class": "PhotoAlbum"
},
{
 "viewerArea": "this.MapViewer",
 "id": "MapViewerMapPlayer",
 "class": "MapPlayer",
 "movementMode": "constrained"
},
{
 "items": [
  {
   "media": "this.panorama_A5CC183A_AEB1_F1D4_41E3_C8DBC03FEACE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A5CC183A_AEB1_F1D4_41E3_C8DBC03FEACE_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 1, 2)",
   "media": "this.album_BAF2C261_AEB3_048A_41B3_3CB84653342D",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 2, 3)",
   "media": "this.album_A16FDC01_AEEC_665A_41D2_05CD2E62EB33",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 3, 4)",
   "media": "this.album_A15985E7_AEF4_61A6_41A0_06BDF6E342D7",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 4, 5)",
   "media": "this.album_BED3A380_AEF3_E25B_41C8_F7103B3D3318",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 5, 6)",
   "media": "this.album_BF0DE890_AEFD_EE7B_418A_7985CA64AC68",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 6, 7)",
   "media": "this.album_BCE121E6_AEFF_A1A7_41D4_767447BDFD6C",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 7, 8)",
   "media": "this.album_BE20707D_AEF5_9EAA_41D7_A89337166D82",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 8, 9)",
   "media": "this.album_BC054606_AEF4_E266_41E2_4612D1C467A2",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 9, 10)",
   "media": "this.album_BCD5AD6C_AEF5_A6AA_41BE_946CB7071D34",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 10, 11)",
   "media": "this.album_BC9A9C53_AEF3_A6FE_41D8_F798402EAFB5",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 11, 12)",
   "media": "this.album_BF876CE6_AEEC_67A6_41E4_F0A11BCE9BA9",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 12, 13)",
   "media": "this.album_BDC825C0_AEEC_A1DA_41E4_E28DB43D7F44",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 13, 0)",
   "media": "this.album_BC069925_AEEF_AE5A_41CD_AF5B19FDD624",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  }
 ],
 "id": "DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist",
 "class": "PlayList"
},
{
 "shadowVerticalLength": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "id": "window_BFDDCA9E_AEFC_6266_41DB_D87CA0FE1A97",
 "bodyBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "class": "Window",
 "paddingBottom": 0,
 "bodyPaddingRight": 0,
 "bodyBackgroundOpacity": 0,
 "titlePaddingLeft": 5,
 "minHeight": 20,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "modal": true,
 "headerVerticalAlign": "middle",
 "bodyPaddingTop": 0,
 "shadowSpread": 1,
 "titleFontColor": "#000000",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "verticalAlign": "middle",
 "minWidth": 20,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontSize": "1.29vmin",
 "headerBackgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "backgroundColor": [],
 "horizontalAlign": "center",
 "title": "",
 "bodyPaddingBottom": 0,
 "titleFontWeight": "normal",
 "overflow": "scroll",
 "closeButtonPressedIconLineWidth": 3,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "veilOpacity": 0.4,
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "veilColorDirection": "horizontal",
 "titlePaddingTop": 5,
 "footerHeight": 5,
 "headerBorderSize": 0,
 "closeButtonBackgroundColor": [],
 "shadow": true,
 "closeButtonPressedBackgroundColor": [],
 "footerBackgroundOpacity": 0,
 "propagateClick": false,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerPaddingRight": 0,
 "footerBackgroundColorDirection": "vertical",
 "titlePaddingRight": 5,
 "children": [
  "this.container_BAD56526_AF13_E6A6_41C7_0840B8FE1BFE"
 ],
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "borderSize": 0,
 "titleFontStyle": "normal",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "headerPaddingBottom": 5,
 "closeButtonIconHeight": 20,
 "contentOpaque": false,
 "closeButtonIconColor": "#B2B2B2",
 "shadowHorizontalLength": 3,
 "scrollBarWidth": 10,
 "titleFontFamily": "Arial",
 "headerBorderColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "shadowBlurRadius": 6,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "headerPaddingTop": 10,
 "closeButtonBorderRadius": 11,
 "headerPaddingLeft": 10,
 "gap": 10,
 "shadowOpacity": 0.5,
 "closeButtonBackgroundColorRatios": [],
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonRollOverBackgroundColor": [],
 "borderRadius": 5,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyPaddingLeft": 0,
 "layout": "vertical",
 "headerBackgroundOpacity": 0,
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "data": {
  "name": "Window8650"
 },
 "backgroundColorRatios": [],
 "closeButtonIconLineWidth": 2,
 "titlePaddingBottom": 5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "closeButtonIconWidth": 20,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ]
},
{
 "shadowVerticalLength": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "id": "window_A19928CE_AEEC_AFE6_41DE_A1F3A11C66F4",
 "bodyBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "class": "Window",
 "paddingBottom": 0,
 "bodyPaddingRight": 0,
 "bodyBackgroundOpacity": 0,
 "titlePaddingLeft": 5,
 "minHeight": 20,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "modal": true,
 "headerVerticalAlign": "middle",
 "bodyPaddingTop": 0,
 "shadowSpread": 1,
 "titleFontColor": "#000000",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "verticalAlign": "middle",
 "minWidth": 20,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontSize": "1.29vmin",
 "headerBackgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "backgroundColor": [],
 "horizontalAlign": "center",
 "title": "",
 "bodyPaddingBottom": 0,
 "titleFontWeight": "normal",
 "overflow": "scroll",
 "closeButtonPressedIconLineWidth": 3,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "veilOpacity": 0.4,
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "veilColorDirection": "horizontal",
 "titlePaddingTop": 5,
 "footerHeight": 5,
 "headerBorderSize": 0,
 "closeButtonBackgroundColor": [],
 "shadow": true,
 "closeButtonPressedBackgroundColor": [],
 "footerBackgroundOpacity": 0,
 "propagateClick": false,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerPaddingRight": 0,
 "footerBackgroundColorDirection": "vertical",
 "titlePaddingRight": 5,
 "children": [
  "this.container_BACF2526_AF13_E6A6_41B5_903CABE88D37"
 ],
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "borderSize": 0,
 "titleFontStyle": "normal",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "headerPaddingBottom": 5,
 "closeButtonIconHeight": 20,
 "contentOpaque": false,
 "closeButtonIconColor": "#B2B2B2",
 "shadowHorizontalLength": 3,
 "scrollBarWidth": 10,
 "titleFontFamily": "Arial",
 "headerBorderColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "shadowBlurRadius": 6,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "headerPaddingTop": 10,
 "closeButtonBorderRadius": 11,
 "headerPaddingLeft": 10,
 "gap": 10,
 "shadowOpacity": 0.5,
 "closeButtonBackgroundColorRatios": [],
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonRollOverBackgroundColor": [],
 "borderRadius": 5,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyPaddingLeft": 0,
 "layout": "vertical",
 "headerBackgroundOpacity": 0,
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "data": {
  "name": "Window4051"
 },
 "backgroundColorRatios": [],
 "closeButtonIconLineWidth": 2,
 "titlePaddingBottom": 5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "closeButtonIconWidth": 20,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ]
},
{
 "class": "PlayList",
 "items": [
  "this.albumitem_BAD4F526_AF13_E6A6_41D2_C93F460FDD21"
 ],
 "id": "playList_BBB4282A_AEEC_EEAE_41D3_58262914BC8D",
 "change": "this.showComponentsWhileMouseOver(this.container_BAD53526_AF13_E6A6_41A3_2119AE2CCA05, [this.htmltext_BAD56526_AF13_E6A6_4171_9D43BE5B420B,this.component_BAD63526_AF13_E6A6_41DD_F579E9050E47,this.component_BAD62526_AF13_E6A6_41C0_C22FF0396284], 2000)"
},
{
 "duration": 5000,
 "height": 1688,
 "thumbnailUrl": "media/album_BAF2C261_AEB3_048A_41B3_3CB84653342D_0_t.jpg",
 "id": "album_BAF2C261_AEB3_048A_41B3_3CB84653342D_0",
 "width": 3000,
 "label": "Creamy Yellow Childish Calendar 2023 Calendar_page-0012",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_BAF2C261_AEB3_048A_41B3_3CB84653342D_0.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 }
},
{
 "class": "PlayList",
 "items": [
  "this.albumitem_BAD73526_AF13_E6A6_41E0_82A38F609D34"
 ],
 "id": "playList_BBB0882A_AEEC_EEAE_41B8_73846643C4C4",
 "change": "this.showComponentsWhileMouseOver(this.container_BAD77526_AF13_E6A6_417E_5EA59A10E323, [this.htmltext_BAD7A526_AF13_E6A6_41B7_9C53373F7607,this.component_BAD85526_AF13_E6A6_41E1_DB4561F9E517,this.component_BAD8B526_AF13_E6A6_41E5_362703C962A8], 2000)"
},
{
 "thumbnailUrl": "media/album_BE20707D_AEF5_9EAA_41D7_A89337166D82_t.png",
 "id": "album_BE20707D_AEF5_9EAA_41D7_A89337166D82",
 "playList": "this.album_BE20707D_AEF5_9EAA_41D7_A89337166D82_AlbumPlayList",
 "label": "Photo Album Creamy Yellow Childish Calendar 2023 Calendar_page-0007",
 "class": "PhotoAlbum"
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_A1A3649F_AEBF_0DB6_41A6_2F0CB7BDEE3C",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_BAED2536_AF13_E6A6_41E1_B182A3357237",
 "class": "PlayList"
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_A1A39AD3_AEBF_058D_41E3_0783FB3C64DE",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_BAEE1545_AF13_E6DA_41E4_411542ED6C7E",
 "class": "PlayList"
},
{
 "width": 3000,
 "fieldOfViewOverlayOutsideColor": "#000000",
 "fieldOfViewOverlayOutsideOpacity": 0,
 "image": {
  "levels": [
   {
    "url": "media/map_A1A213B2_AEBF_0B8E_41E5_4DA1B4980A11.jpeg",
    "width": 3000,
    "class": "ImageResourceLevel",
    "height": 1688
   },
   {
    "url": "media/map_A1A213B2_AEBF_0B8E_41E5_4DA1B4980A11_lq.jpeg",
    "width": 341,
    "tags": "preload",
    "class": "ImageResourceLevel",
    "height": 192
   }
  ],
  "class": "ImageResource"
 },
 "thumbnailUrl": "media/map_A1A213B2_AEBF_0B8E_41E5_4DA1B4980A11_t.jpg",
 "id": "map_A1A213B2_AEBF_0B8E_41E5_4DA1B4980A11",
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "fieldOfViewOverlayRadiusScale": 0.3,
 "maximumZoomFactor": 1.2,
 "scaleMode": "fit_inside",
 "class": "Map",
 "minimumZoomFactor": 0.5,
 "initialZoomFactor": 1,
 "label": "Creamy Yellow Childish Calendar 2023 Calendar_page-0009",
 "height": 1688
},
{
 "items": [
  {
   "media": "this.panorama_A5CC183A_AEB1_F1D4_41E3_C8DBC03FEACE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A5CC183A_AEB1_F1D4_41E3_C8DBC03FEACE_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 1, 2)",
   "media": "this.album_BAF2C261_AEB3_048A_41B3_3CB84653342D",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 2, 3)",
   "media": "this.album_A16FDC01_AEEC_665A_41D2_05CD2E62EB33",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 3, 4)",
   "media": "this.album_A15985E7_AEF4_61A6_41A0_06BDF6E342D7",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 4, 5)",
   "media": "this.album_BED3A380_AEF3_E25B_41C8_F7103B3D3318",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 5, 6)",
   "media": "this.album_BF0DE890_AEFD_EE7B_418A_7985CA64AC68",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 6, 7)",
   "media": "this.album_BCE121E6_AEFF_A1A7_41D4_767447BDFD6C",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 7, 8)",
   "media": "this.album_BE20707D_AEF5_9EAA_41D7_A89337166D82",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 8, 9)",
   "media": "this.album_BC054606_AEF4_E266_41E2_4612D1C467A2",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 9, 10)",
   "media": "this.album_BCD5AD6C_AEF5_A6AA_41BE_946CB7071D34",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 10, 11)",
   "media": "this.album_BC9A9C53_AEF3_A6FE_41D8_F798402EAFB5",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 11, 12)",
   "media": "this.album_BF876CE6_AEEC_67A6_41E4_F0A11BCE9BA9",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 12, 13)",
   "media": "this.album_BDC825C0_AEEC_A1DA_41E4_E28DB43D7F44",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 13, 0)",
   "media": "this.album_BC069925_AEEF_AE5A_41CD_AF5B19FDD624",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  }
 ],
 "id": "DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist",
 "class": "PlayList"
},
{
 "duration": 5000,
 "height": 1688,
 "thumbnailUrl": "media/album_A15985E7_AEF4_61A6_41A0_06BDF6E342D7_0_t.jpg",
 "id": "album_A15985E7_AEF4_61A6_41A0_06BDF6E342D7_0",
 "width": 3000,
 "label": "Creamy Yellow Childish Calendar 2023 Calendar_page-0003",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_A15985E7_AEF4_61A6_41A0_06BDF6E342D7_0.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 }
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_A1A3C57A_AEBF_0F7F_41D0_953786F69D68",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_BAED7536_AF13_E6A6_41DE_7E135EF09C5E",
 "class": "PlayList"
},
{
 "width": 3000,
 "fieldOfViewOverlayOutsideColor": "#000000",
 "fieldOfViewOverlayOutsideOpacity": 0,
 "image": {
  "levels": [
   {
    "url": "media/map_A1A3DCAB_AEBF_3D9D_41D1_6270BED3A542.jpeg",
    "width": 3000,
    "class": "ImageResourceLevel",
    "height": 1688
   },
   {
    "url": "media/map_A1A3DCAB_AEBF_3D9D_41D1_6270BED3A542_lq.jpeg",
    "width": 341,
    "tags": "preload",
    "class": "ImageResourceLevel",
    "height": 192
   }
  ],
  "class": "ImageResource"
 },
 "thumbnailUrl": "media/map_A1A3DCAB_AEBF_3D9D_41D1_6270BED3A542_t.jpg",
 "id": "map_A1A3DCAB_AEBF_3D9D_41D1_6270BED3A542",
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "fieldOfViewOverlayRadiusScale": 0.3,
 "maximumZoomFactor": 1.2,
 "scaleMode": "fit_inside",
 "class": "Map",
 "minimumZoomFactor": 0.5,
 "initialZoomFactor": 1,
 "label": "Creamy Yellow Childish Calendar 2023 Calendar_page-0002",
 "height": 1688
},
{
 "shadowVerticalLength": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "id": "window_BFFE2EEF_AEFD_A3A6_41E0_F008DC26A0E1",
 "bodyBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "class": "Window",
 "paddingBottom": 0,
 "bodyPaddingRight": 0,
 "bodyBackgroundOpacity": 0,
 "titlePaddingLeft": 5,
 "minHeight": 20,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "modal": true,
 "headerVerticalAlign": "middle",
 "bodyPaddingTop": 0,
 "shadowSpread": 1,
 "titleFontColor": "#000000",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "verticalAlign": "middle",
 "minWidth": 20,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontSize": "1.29vmin",
 "headerBackgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "backgroundColor": [],
 "horizontalAlign": "center",
 "title": "",
 "bodyPaddingBottom": 0,
 "titleFontWeight": "normal",
 "overflow": "scroll",
 "closeButtonPressedIconLineWidth": 3,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "veilOpacity": 0.4,
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "veilColorDirection": "horizontal",
 "titlePaddingTop": 5,
 "footerHeight": 5,
 "headerBorderSize": 0,
 "closeButtonBackgroundColor": [],
 "shadow": true,
 "closeButtonPressedBackgroundColor": [],
 "footerBackgroundOpacity": 0,
 "propagateClick": false,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerPaddingRight": 0,
 "footerBackgroundColorDirection": "vertical",
 "titlePaddingRight": 5,
 "children": [
  "this.container_BAD53526_AF13_E6A6_41A3_2119AE2CCA05"
 ],
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "borderSize": 0,
 "titleFontStyle": "normal",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "headerPaddingBottom": 5,
 "closeButtonIconHeight": 20,
 "contentOpaque": false,
 "closeButtonIconColor": "#B2B2B2",
 "shadowHorizontalLength": 3,
 "scrollBarWidth": 10,
 "titleFontFamily": "Arial",
 "headerBorderColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "shadowBlurRadius": 6,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "headerPaddingTop": 10,
 "closeButtonBorderRadius": 11,
 "headerPaddingLeft": 10,
 "gap": 10,
 "shadowOpacity": 0.5,
 "closeButtonBackgroundColorRatios": [],
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonRollOverBackgroundColor": [],
 "borderRadius": 5,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyPaddingLeft": 0,
 "layout": "vertical",
 "headerBackgroundOpacity": 0,
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "data": {
  "name": "Window7925"
 },
 "backgroundColorRatios": [],
 "closeButtonIconLineWidth": 2,
 "titlePaddingBottom": 5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "closeButtonIconWidth": 20,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ]
},
{
 "viewerArea": "this.MainViewer",
 "buttonCardboardView": "this.Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0",
 "buttonToggleHotspots": "this.Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA",
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true,
 "touchControlMode": "drag_rotation",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "buttonToggleGyroscope": "this.Button_485BFF41_598E_3DB2_41A9_33F36E014467",
 "mouseControlMode": "drag_acceleration"
},
{
 "width": 3000,
 "fieldOfViewOverlayOutsideColor": "#000000",
 "fieldOfViewOverlayOutsideOpacity": 0,
 "image": {
  "levels": [
   {
    "url": "media/map_A11D7081_AEBF_058D_41E1_5D6341AB0591.jpeg",
    "width": 3000,
    "class": "ImageResourceLevel",
    "height": 1688
   },
   {
    "url": "media/map_A11D7081_AEBF_058D_41E1_5D6341AB0591_lq.jpeg",
    "width": 341,
    "tags": "preload",
    "class": "ImageResourceLevel",
    "height": 192
   }
  ],
  "class": "ImageResource"
 },
 "thumbnailUrl": "media/map_A11D7081_AEBF_058D_41E1_5D6341AB0591_t.jpg",
 "id": "map_A11D7081_AEBF_058D_41E1_5D6341AB0591",
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "fieldOfViewOverlayRadiusScale": 0.3,
 "maximumZoomFactor": 1.2,
 "scaleMode": "fit_inside",
 "class": "Map",
 "minimumZoomFactor": 0.5,
 "initialZoomFactor": 1,
 "label": "Creamy Yellow Childish Calendar 2023 Calendar_page-0012",
 "height": 1688
},
{
 "thumbnailUrl": "media/album_BAF2C261_AEB3_048A_41B3_3CB84653342D_t.png",
 "id": "album_BAF2C261_AEB3_048A_41B3_3CB84653342D",
 "playList": "this.album_BAF2C261_AEB3_048A_41B3_3CB84653342D_AlbumPlayList",
 "label": "Photo Album Creamy Yellow Childish Calendar 2023 Calendar_page-0012",
 "class": "PhotoAlbum"
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_A1A252B6_AEBF_05F7_41C2_8B669EF117CC",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_BAEC3536_AF13_E6A6_41C6_57207DF3C62F",
 "class": "PlayList"
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_A1A213B2_AEBF_0B8E_41E5_4DA1B4980A11",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_BAEC1536_AF13_E6A6_41D3_16F19CEAF0C7",
 "class": "PlayList"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_A5CC183A_AEB1_F1D4_41E3_C8DBC03FEACE_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_A5CC183A_AEB1_F1D4_41E3_C8DBC03FEACE_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_A5CC183A_AEB1_F1D4_41E3_C8DBC03FEACE_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A5CC183A_AEB1_F1D4_41E3_C8DBC03FEACE_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_A5CC183A_AEB1_F1D4_41E3_C8DBC03FEACE_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_A5CC183A_AEB1_F1D4_41E3_C8DBC03FEACE_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A5CC183A_AEB1_F1D4_41E3_C8DBC03FEACE_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_A5CC183A_AEB1_F1D4_41E3_C8DBC03FEACE_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_A5CC183A_AEB1_F1D4_41E3_C8DBC03FEACE_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A5CC183A_AEB1_F1D4_41E3_C8DBC03FEACE_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_A5CC183A_AEB1_F1D4_41E3_C8DBC03FEACE_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_A5CC183A_AEB1_F1D4_41E3_C8DBC03FEACE_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A5CC183A_AEB1_F1D4_41E3_C8DBC03FEACE_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A5CC183A_AEB1_F1D4_41E3_C8DBC03FEACE_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_A5CC183A_AEB1_F1D4_41E3_C8DBC03FEACE_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_A5CC183A_AEB1_F1D4_41E3_C8DBC03FEACE_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_A5CC183A_AEB1_F1D4_41E3_C8DBC03FEACE_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_A5CC183A_AEB1_F1D4_41E3_C8DBC03FEACE_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_A5CC183A_AEB1_F1D4_41E3_C8DBC03FEACE_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_A5CC183A_AEB1_F1D4_41E3_C8DBC03FEACE_t.jpg",
 "hfovMin": "150%",
 "id": "panorama_A5CC183A_AEB1_F1D4_41E3_C8DBC03FEACE",
 "vfov": 180,
 "label": "timothy-oldfield-luufnHoChRU-unsplash",
 "overlays": [
  "this.overlay_B81B78A9_AECF_059A_41DB_90344E02B5DB",
  "this.overlay_A125F283_AEEC_625D_41D8_10336A14244D",
  "this.overlay_BCBCE4D6_AEF4_A7E6_41C5_14562263979B",
  "this.overlay_BC99D8D6_AEF7_EFE6_41DB_3AE7ACCC7C34",
  "this.overlay_BF4966D1_AEFC_63FA_41CE_73F4CBFE4BCB",
  "this.overlay_BE2F535A_AEFC_A2EE_41D7_F5CC94126521",
  "this.overlay_BF10281E_AEFF_AE67_41DF_3F9ED41A2C05",
  "this.overlay_BDE588FF_AEF4_AFA5_41E4_1D356A716D29",
  "this.overlay_BC7B8570_AEF4_66BB_41E2_B3008C5B0BF6",
  "this.overlay_BC5CEC7C_AEF4_66AA_41E2_13ADF57287B7",
  "this.overlay_BC28C79F_AEEC_A266_41B4_E8AF7BC20253",
  "this.overlay_BF16B4B2_AEEC_67BE_41C6_507AA8E09A26",
  "this.overlay_BC756C86_AEEC_6667_41CC_7407BD27D89C"
 ],
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360
},
{
 "thumbnailUrl": "media/album_BC054606_AEF4_E266_41E2_4612D1C467A2_t.png",
 "id": "album_BC054606_AEF4_E266_41E2_4612D1C467A2",
 "playList": "this.album_BC054606_AEF4_E266_41E2_4612D1C467A2_AlbumPlayList",
 "label": "Photo Album Creamy Yellow Childish Calendar 2023 Calendar_page-0008",
 "class": "PhotoAlbum"
},
{
 "width": 3000,
 "fieldOfViewOverlayOutsideColor": "#000000",
 "fieldOfViewOverlayOutsideOpacity": 0,
 "image": {
  "levels": [
   {
    "url": "media/map_A1A3DBC0_AEBF_3B8A_41C9_48EE11330ECC.jpeg",
    "width": 3000,
    "class": "ImageResourceLevel",
    "height": 1688
   },
   {
    "url": "media/map_A1A3DBC0_AEBF_3B8A_41C9_48EE11330ECC_lq.jpeg",
    "width": 341,
    "tags": "preload",
    "class": "ImageResourceLevel",
    "height": 192
   }
  ],
  "class": "ImageResource"
 },
 "thumbnailUrl": "media/map_A1A3DBC0_AEBF_3B8A_41C9_48EE11330ECC_t.jpg",
 "id": "map_A1A3DBC0_AEBF_3B8A_41C9_48EE11330ECC",
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "fieldOfViewOverlayRadiusScale": 0.3,
 "maximumZoomFactor": 1.2,
 "scaleMode": "fit_inside",
 "class": "Map",
 "minimumZoomFactor": 0.5,
 "initialZoomFactor": 1,
 "label": "Creamy Yellow Childish Calendar 2023 Calendar_page-0001",
 "height": 1688
},
{
 "duration": 5000,
 "height": 1688,
 "thumbnailUrl": "media/album_BED3A380_AEF3_E25B_41C8_F7103B3D3318_0_t.jpg",
 "id": "album_BED3A380_AEF3_E25B_41C8_F7103B3D3318_0",
 "width": 3000,
 "label": "Creamy Yellow Childish Calendar 2023 Calendar_page-0004",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_BED3A380_AEF3_E25B_41C8_F7103B3D3318_0.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 }
},
{
 "width": 3000,
 "fieldOfViewOverlayOutsideColor": "#000000",
 "fieldOfViewOverlayOutsideOpacity": 0,
 "image": {
  "levels": [
   {
    "url": "media/map_A1A3649F_AEBF_0DB6_41A6_2F0CB7BDEE3C.jpeg",
    "width": 3000,
    "class": "ImageResourceLevel",
    "height": 1688
   },
   {
    "url": "media/map_A1A3649F_AEBF_0DB6_41A6_2F0CB7BDEE3C_lq.jpeg",
    "width": 341,
    "tags": "preload",
    "class": "ImageResourceLevel",
    "height": 192
   }
  ],
  "class": "ImageResource"
 },
 "thumbnailUrl": "media/map_A1A3649F_AEBF_0DB6_41A6_2F0CB7BDEE3C_t.jpg",
 "id": "map_A1A3649F_AEBF_0DB6_41A6_2F0CB7BDEE3C",
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "fieldOfViewOverlayRadiusScale": 0.3,
 "maximumZoomFactor": 1.2,
 "scaleMode": "fit_inside",
 "class": "Map",
 "minimumZoomFactor": 0.5,
 "initialZoomFactor": 1,
 "label": "Creamy Yellow Childish Calendar 2023 Calendar_page-0010",
 "height": 1688
},
{
 "class": "PlayList",
 "items": [
  "this.albumitem_BAD29526_AF13_E6A6_41E1_0219966D7B79"
 ],
 "id": "playList_BBB6382A_AEEC_EEAE_41E0_73C2F95ED84A",
 "change": "this.showComponentsWhileMouseOver(this.container_BAD2D526_AF13_E6A6_41DA_F75655059EEF, [this.htmltext_BAD37526_AF13_E6A6_41D5_450BDE391D2E,this.component_BAD3C526_AF13_E6A6_41E1_B919D5387ABD,this.component_BAD43526_AF13_E6A6_41E0_9D3F403959FA], 2000)"
},
{
 "items": [
  {
   "media": "this.panorama_A5CC183A_AEB1_F1D4_41E3_C8DBC03FEACE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A5CC183A_AEB1_F1D4_41E3_C8DBC03FEACE_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 1, 2)",
   "media": "this.album_BAF2C261_AEB3_048A_41B3_3CB84653342D",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 2, 3)",
   "media": "this.album_A16FDC01_AEEC_665A_41D2_05CD2E62EB33",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 3, 4)",
   "media": "this.album_A15985E7_AEF4_61A6_41A0_06BDF6E342D7",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 4, 5)",
   "media": "this.album_BED3A380_AEF3_E25B_41C8_F7103B3D3318",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 5, 6)",
   "media": "this.album_BF0DE890_AEFD_EE7B_418A_7985CA64AC68",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 6, 7)",
   "media": "this.album_BCE121E6_AEFF_A1A7_41D4_767447BDFD6C",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 7, 8)",
   "media": "this.album_BE20707D_AEF5_9EAA_41D7_A89337166D82",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 8, 9)",
   "media": "this.album_BC054606_AEF4_E266_41E2_4612D1C467A2",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 9, 10)",
   "media": "this.album_BCD5AD6C_AEF5_A6AA_41BE_946CB7071D34",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 10, 11)",
   "media": "this.album_BC9A9C53_AEF3_A6FE_41D8_F798402EAFB5",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 11, 12)",
   "media": "this.album_BF876CE6_AEEC_67A6_41E4_F0A11BCE9BA9",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 12, 13)",
   "media": "this.album_BDC825C0_AEEC_A1DA_41E4_E28DB43D7F44",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 13, 0)",
   "media": "this.album_BC069925_AEEF_AE5A_41CD_AF5B19FDD624",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  }
 ],
 "id": "DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist",
 "class": "PlayList"
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_A106F1AC_AEBF_079A_41C6_2F92FF7CDBE6",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_BAECB536_AF13_E6A6_41C6_1D5BE5342329",
 "class": "PlayList"
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_A1A366D5_AEBF_0DB5_41D7_3FDC7A18230A",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_BAEB2536_AF13_E6A6_41DF_EBBBF8BF580C",
 "class": "PlayList"
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_A1A209F7_AEBF_0775_41D1_172BC90107B2",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_BAEBA536_AF13_E6A6_41B5_2912DB810EB7",
 "class": "PlayList"
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_A1A3649F_AEBF_0DB6_41A6_2F0CB7BDEE3C",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_BAEAE536_AF13_E6A6_41E0_8E743C3F3B6B",
 "class": "PlayList"
},
{
 "items": [
  {
   "media": "this.panorama_A5CC183A_AEB1_F1D4_41E3_C8DBC03FEACE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A5CC183A_AEB1_F1D4_41E3_C8DBC03FEACE_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 1, 2)",
   "media": "this.album_BAF2C261_AEB3_048A_41B3_3CB84653342D",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 2, 3)",
   "media": "this.album_A16FDC01_AEEC_665A_41D2_05CD2E62EB33",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 3, 4)",
   "media": "this.album_A15985E7_AEF4_61A6_41A0_06BDF6E342D7",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 4, 5)",
   "media": "this.album_BED3A380_AEF3_E25B_41C8_F7103B3D3318",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 5, 6)",
   "media": "this.album_BF0DE890_AEFD_EE7B_418A_7985CA64AC68",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 6, 7)",
   "media": "this.album_BCE121E6_AEFF_A1A7_41D4_767447BDFD6C",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 7, 8)",
   "media": "this.album_BE20707D_AEF5_9EAA_41D7_A89337166D82",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 8, 9)",
   "media": "this.album_BC054606_AEF4_E266_41E2_4612D1C467A2",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 9, 10)",
   "media": "this.album_BCD5AD6C_AEF5_A6AA_41BE_946CB7071D34",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 10, 11)",
   "media": "this.album_BC9A9C53_AEF3_A6FE_41D8_F798402EAFB5",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 11, 12)",
   "media": "this.album_BF876CE6_AEEC_67A6_41E4_F0A11BCE9BA9",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 12, 13)",
   "media": "this.album_BDC825C0_AEEC_A1DA_41E4_E28DB43D7F44",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 13, 0)",
   "media": "this.album_BC069925_AEEF_AE5A_41CD_AF5B19FDD624",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  }
 ],
 "id": "DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist",
 "class": "PlayList"
},
{
 "thumbnailUrl": "media/album_A15985E7_AEF4_61A6_41A0_06BDF6E342D7_t.png",
 "id": "album_A15985E7_AEF4_61A6_41A0_06BDF6E342D7",
 "playList": "this.album_A15985E7_AEF4_61A6_41A0_06BDF6E342D7_AlbumPlayList",
 "label": "Photo Album Creamy Yellow Childish Calendar 2023 Calendar_page-0003",
 "class": "PhotoAlbum"
},
{
 "duration": 5000,
 "height": 1688,
 "thumbnailUrl": "media/album_BCE121E6_AEFF_A1A7_41D4_767447BDFD6C_0_t.jpg",
 "id": "album_BCE121E6_AEFF_A1A7_41D4_767447BDFD6C_0",
 "width": 3000,
 "label": "Creamy Yellow Childish Calendar 2023 Calendar_page-0006",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_BCE121E6_AEFF_A1A7_41D4_767447BDFD6C_0.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 }
},
{
 "duration": 5000,
 "height": 1688,
 "thumbnailUrl": "media/album_BC9A9C53_AEF3_A6FE_41D8_F798402EAFB5_0_t.jpg",
 "id": "album_BC9A9C53_AEF3_A6FE_41D8_F798402EAFB5_0",
 "width": 3000,
 "label": "Creamy Yellow Childish Calendar 2023 Calendar_page-0010",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_BC9A9C53_AEF3_A6FE_41D8_F798402EAFB5_0.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 }
},
{
 "shadowVerticalLength": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "id": "window_BF4DB805_AEF3_EE5A_41DB_586DBF67BBF1",
 "bodyBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "class": "Window",
 "paddingBottom": 0,
 "bodyPaddingRight": 0,
 "bodyBackgroundOpacity": 0,
 "titlePaddingLeft": 5,
 "minHeight": 20,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "modal": true,
 "headerVerticalAlign": "middle",
 "bodyPaddingTop": 0,
 "shadowSpread": 1,
 "titleFontColor": "#000000",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "verticalAlign": "middle",
 "minWidth": 20,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontSize": "1.29vmin",
 "headerBackgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "backgroundColor": [],
 "horizontalAlign": "center",
 "title": "",
 "bodyPaddingBottom": 0,
 "titleFontWeight": "normal",
 "overflow": "scroll",
 "closeButtonPressedIconLineWidth": 3,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "veilOpacity": 0.4,
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "veilColorDirection": "horizontal",
 "titlePaddingTop": 5,
 "footerHeight": 5,
 "headerBorderSize": 0,
 "closeButtonBackgroundColor": [],
 "shadow": true,
 "closeButtonPressedBackgroundColor": [],
 "footerBackgroundOpacity": 0,
 "propagateClick": false,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerPaddingRight": 0,
 "footerBackgroundColorDirection": "vertical",
 "titlePaddingRight": 5,
 "children": [
  "this.container_BAE41536_AF13_E6A6_419E_98E9DE4F296A"
 ],
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "borderSize": 0,
 "titleFontStyle": "normal",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "headerPaddingBottom": 5,
 "closeButtonIconHeight": 20,
 "contentOpaque": false,
 "closeButtonIconColor": "#B2B2B2",
 "shadowHorizontalLength": 3,
 "scrollBarWidth": 10,
 "titleFontFamily": "Arial",
 "headerBorderColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "shadowBlurRadius": 6,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "headerPaddingTop": 10,
 "closeButtonBorderRadius": 11,
 "headerPaddingLeft": 10,
 "gap": 10,
 "shadowOpacity": 0.5,
 "closeButtonBackgroundColorRatios": [],
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonRollOverBackgroundColor": [],
 "borderRadius": 5,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyPaddingLeft": 0,
 "layout": "vertical",
 "headerBackgroundOpacity": 0,
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "data": {
  "name": "Window14715"
 },
 "backgroundColorRatios": [],
 "closeButtonIconLineWidth": 2,
 "titlePaddingBottom": 5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "closeButtonIconWidth": 20,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ]
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_A1A366D5_AEBF_0DB5_41D7_3FDC7A18230A",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_BAED5536_AF13_E6A6_41DA_000BEFD7C408",
 "class": "PlayList"
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_A106F1AC_AEBF_079A_41C6_2F92FF7CDBE6",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_BAEBF536_AF13_E6A6_4171_99CDB90A2016",
 "class": "PlayList"
},
{
 "thumbnailUrl": "media/album_BCD5AD6C_AEF5_A6AA_41BE_946CB7071D34_t.png",
 "id": "album_BCD5AD6C_AEF5_A6AA_41BE_946CB7071D34",
 "playList": "this.album_BCD5AD6C_AEF5_A6AA_41BE_946CB7071D34_AlbumPlayList",
 "label": "Photo Album Creamy Yellow Childish Calendar 2023 Calendar_page-0009",
 "class": "PhotoAlbum"
},
{
 "thumbnailUrl": "media/album_BC069925_AEEF_AE5A_41CD_AF5B19FDD624_t.png",
 "id": "album_BC069925_AEEF_AE5A_41CD_AF5B19FDD624",
 "playList": "this.album_BC069925_AEEF_AE5A_41CD_AF5B19FDD624_AlbumPlayList",
 "label": "Photo Album Creamy Yellow Childish Calendar 2023 Calendar_page-0013",
 "class": "PhotoAlbum"
},
{
 "duration": 5000,
 "height": 1688,
 "thumbnailUrl": "media/album_BF0DE890_AEFD_EE7B_418A_7985CA64AC68_0_t.jpg",
 "id": "album_BF0DE890_AEFD_EE7B_418A_7985CA64AC68_0",
 "width": 3000,
 "label": "Creamy Yellow Childish Calendar 2023 Calendar_page-0005",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_BF0DE890_AEFD_EE7B_418A_7985CA64AC68_0.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 }
},
{
 "shadowVerticalLength": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "id": "window_BFE67542_AEF5_A6DE_41DF_F7D611F2D116",
 "bodyBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "class": "Window",
 "paddingBottom": 0,
 "bodyPaddingRight": 0,
 "bodyBackgroundOpacity": 0,
 "titlePaddingLeft": 5,
 "minHeight": 20,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "modal": true,
 "headerVerticalAlign": "middle",
 "bodyPaddingTop": 0,
 "shadowSpread": 1,
 "titleFontColor": "#000000",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "verticalAlign": "middle",
 "minWidth": 20,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontSize": "1.29vmin",
 "headerBackgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "backgroundColor": [],
 "horizontalAlign": "center",
 "title": "",
 "bodyPaddingBottom": 0,
 "titleFontWeight": "normal",
 "overflow": "scroll",
 "closeButtonPressedIconLineWidth": 3,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "veilOpacity": 0.4,
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "veilColorDirection": "horizontal",
 "titlePaddingTop": 5,
 "footerHeight": 5,
 "headerBorderSize": 0,
 "closeButtonBackgroundColor": [],
 "shadow": true,
 "closeButtonPressedBackgroundColor": [],
 "footerBackgroundOpacity": 0,
 "propagateClick": false,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerPaddingRight": 0,
 "footerBackgroundColorDirection": "vertical",
 "titlePaddingRight": 5,
 "children": [
  "this.container_BAD77526_AF13_E6A6_417E_5EA59A10E323"
 ],
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "borderSize": 0,
 "titleFontStyle": "normal",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "headerPaddingBottom": 5,
 "closeButtonIconHeight": 20,
 "contentOpaque": false,
 "closeButtonIconColor": "#B2B2B2",
 "shadowHorizontalLength": 3,
 "scrollBarWidth": 10,
 "titleFontFamily": "Arial",
 "headerBorderColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "shadowBlurRadius": 6,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "headerPaddingTop": 10,
 "closeButtonBorderRadius": 11,
 "headerPaddingLeft": 10,
 "gap": 10,
 "shadowOpacity": 0.5,
 "closeButtonBackgroundColorRatios": [],
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonRollOverBackgroundColor": [],
 "borderRadius": 5,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyPaddingLeft": 0,
 "layout": "vertical",
 "headerBackgroundOpacity": 0,
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "data": {
  "name": "Window10019"
 },
 "backgroundColorRatios": [],
 "closeButtonIconLineWidth": 2,
 "titlePaddingBottom": 5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "closeButtonIconWidth": 20,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ]
},
{
 "width": 3000,
 "fieldOfViewOverlayOutsideColor": "#000000",
 "fieldOfViewOverlayOutsideOpacity": 0,
 "image": {
  "levels": [
   {
    "url": "media/map_A1A252B6_AEBF_05F7_41C2_8B669EF117CC.jpeg",
    "width": 3000,
    "class": "ImageResourceLevel",
    "height": 1688
   },
   {
    "url": "media/map_A1A252B6_AEBF_05F7_41C2_8B669EF117CC_lq.jpeg",
    "width": 341,
    "tags": "preload",
    "class": "ImageResourceLevel",
    "height": 192
   }
  ],
  "class": "ImageResource"
 },
 "thumbnailUrl": "media/map_A1A252B6_AEBF_05F7_41C2_8B669EF117CC_t.jpg",
 "id": "map_A1A252B6_AEBF_05F7_41C2_8B669EF117CC",
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "fieldOfViewOverlayRadiusScale": 0.3,
 "maximumZoomFactor": 1.2,
 "scaleMode": "fit_inside",
 "class": "Map",
 "minimumZoomFactor": 0.5,
 "initialZoomFactor": 1,
 "label": "Creamy Yellow Childish Calendar 2023 Calendar_page-0008",
 "height": 1688
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_A1A3B91B_AEBF_04BE_41C1_8995D99EE892",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_BAEB4536_AF13_E6A6_41E3_3A2404EA678C",
 "class": "PlayList"
},
{
 "duration": 5000,
 "height": 1688,
 "thumbnailUrl": "media/album_A16FDC01_AEEC_665A_41D2_05CD2E62EB33_0_t.jpg",
 "id": "album_A16FDC01_AEEC_665A_41D2_05CD2E62EB33_0",
 "width": 3000,
 "label": "Creamy Yellow Childish Calendar 2023 Calendar_page-0002",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_A16FDC01_AEEC_665A_41D2_05CD2E62EB33_0.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 }
},
{
 "shadowVerticalLength": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "id": "window_A1AC67FD_AEF3_A1AA_41E3_DB04D6D73071",
 "bodyBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "class": "Window",
 "paddingBottom": 0,
 "bodyPaddingRight": 0,
 "bodyBackgroundOpacity": 0,
 "titlePaddingLeft": 5,
 "minHeight": 20,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "modal": true,
 "headerVerticalAlign": "middle",
 "bodyPaddingTop": 0,
 "shadowSpread": 1,
 "titleFontColor": "#000000",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "verticalAlign": "middle",
 "minWidth": 20,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontSize": "1.29vmin",
 "headerBackgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "backgroundColor": [],
 "horizontalAlign": "center",
 "title": "",
 "bodyPaddingBottom": 0,
 "titleFontWeight": "normal",
 "overflow": "scroll",
 "closeButtonPressedIconLineWidth": 3,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "veilOpacity": 0.4,
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "veilColorDirection": "horizontal",
 "titlePaddingTop": 5,
 "footerHeight": 5,
 "headerBorderSize": 0,
 "closeButtonBackgroundColor": [],
 "shadow": true,
 "closeButtonPressedBackgroundColor": [],
 "footerBackgroundOpacity": 0,
 "propagateClick": false,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerPaddingRight": 0,
 "footerBackgroundColorDirection": "vertical",
 "titlePaddingRight": 5,
 "children": [
  "this.container_BAD2D526_AF13_E6A6_41DA_F75655059EEF"
 ],
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "borderSize": 0,
 "titleFontStyle": "normal",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "headerPaddingBottom": 5,
 "closeButtonIconHeight": 20,
 "contentOpaque": false,
 "closeButtonIconColor": "#B2B2B2",
 "shadowHorizontalLength": 3,
 "scrollBarWidth": 10,
 "titleFontFamily": "Arial",
 "headerBorderColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "shadowBlurRadius": 6,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "headerPaddingTop": 10,
 "closeButtonBorderRadius": 11,
 "headerPaddingLeft": 10,
 "gap": 10,
 "shadowOpacity": 0.5,
 "closeButtonBackgroundColorRatios": [],
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonRollOverBackgroundColor": [],
 "borderRadius": 5,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyPaddingLeft": 0,
 "layout": "vertical",
 "headerBackgroundOpacity": 0,
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "data": {
  "name": "Window6650"
 },
 "backgroundColorRatios": [],
 "closeButtonIconLineWidth": 2,
 "titlePaddingBottom": 5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "closeButtonIconWidth": 20,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ]
},
{
 "items": [
  {
   "media": "this.panorama_A5CC183A_AEB1_F1D4_41E3_C8DBC03FEACE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A5CC183A_AEB1_F1D4_41E3_C8DBC03FEACE_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 1, 2)",
   "media": "this.album_BAF2C261_AEB3_048A_41B3_3CB84653342D",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 2, 3)",
   "media": "this.album_A16FDC01_AEEC_665A_41D2_05CD2E62EB33",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 3, 4)",
   "media": "this.album_A15985E7_AEF4_61A6_41A0_06BDF6E342D7",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 4, 5)",
   "media": "this.album_BED3A380_AEF3_E25B_41C8_F7103B3D3318",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 5, 6)",
   "media": "this.album_BF0DE890_AEFD_EE7B_418A_7985CA64AC68",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 6, 7)",
   "media": "this.album_BCE121E6_AEFF_A1A7_41D4_767447BDFD6C",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 7, 8)",
   "media": "this.album_BE20707D_AEF5_9EAA_41D7_A89337166D82",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 8, 9)",
   "media": "this.album_BC054606_AEF4_E266_41E2_4612D1C467A2",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 9, 10)",
   "media": "this.album_BCD5AD6C_AEF5_A6AA_41BE_946CB7071D34",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 10, 11)",
   "media": "this.album_BC9A9C53_AEF3_A6FE_41D8_F798402EAFB5",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 11, 12)",
   "media": "this.album_BF876CE6_AEEC_67A6_41E4_F0A11BCE9BA9",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 12, 13)",
   "media": "this.album_BDC825C0_AEEC_A1DA_41E4_E28DB43D7F44",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 13, 0)",
   "media": "this.album_BC069925_AEEF_AE5A_41CD_AF5B19FDD624",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  }
 ],
 "id": "DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist",
 "class": "PlayList"
},
{
 "shadowVerticalLength": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "id": "window_BCD142E6_AEEC_A3A6_41E1_032DCD232E5E",
 "bodyBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "class": "Window",
 "paddingBottom": 0,
 "bodyPaddingRight": 0,
 "bodyBackgroundOpacity": 0,
 "titlePaddingLeft": 5,
 "minHeight": 20,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "modal": true,
 "headerVerticalAlign": "middle",
 "bodyPaddingTop": 0,
 "shadowSpread": 1,
 "titleFontColor": "#000000",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "verticalAlign": "middle",
 "minWidth": 20,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontSize": "1.29vmin",
 "headerBackgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "backgroundColor": [],
 "horizontalAlign": "center",
 "title": "",
 "bodyPaddingBottom": 0,
 "titleFontWeight": "normal",
 "overflow": "scroll",
 "closeButtonPressedIconLineWidth": 3,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "veilOpacity": 0.4,
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "veilColorDirection": "horizontal",
 "titlePaddingTop": 5,
 "footerHeight": 5,
 "headerBorderSize": 0,
 "closeButtonBackgroundColor": [],
 "shadow": true,
 "closeButtonPressedBackgroundColor": [],
 "footerBackgroundOpacity": 0,
 "propagateClick": false,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerPaddingRight": 0,
 "footerBackgroundColorDirection": "vertical",
 "titlePaddingRight": 5,
 "children": [
  "this.container_BAE5C536_AF13_E6A6_41DE_7E09373885E5"
 ],
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "borderSize": 0,
 "titleFontStyle": "normal",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "headerPaddingBottom": 5,
 "closeButtonIconHeight": 20,
 "contentOpaque": false,
 "closeButtonIconColor": "#B2B2B2",
 "shadowHorizontalLength": 3,
 "scrollBarWidth": 10,
 "titleFontFamily": "Arial",
 "headerBorderColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "shadowBlurRadius": 6,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "headerPaddingTop": 10,
 "closeButtonBorderRadius": 11,
 "headerPaddingLeft": 10,
 "gap": 10,
 "shadowOpacity": 0.5,
 "closeButtonBackgroundColorRatios": [],
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonRollOverBackgroundColor": [],
 "borderRadius": 5,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyPaddingLeft": 0,
 "layout": "vertical",
 "headerBackgroundOpacity": 0,
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "data": {
  "name": "Window16148"
 },
 "backgroundColorRatios": [],
 "closeButtonIconLineWidth": 2,
 "titlePaddingBottom": 5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "closeButtonIconWidth": 20,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ]
},
{
 "thumbnailUrl": "media/album_BF0DE890_AEFD_EE7B_418A_7985CA64AC68_t.png",
 "id": "album_BF0DE890_AEFD_EE7B_418A_7985CA64AC68",
 "playList": "this.album_BF0DE890_AEFD_EE7B_418A_7985CA64AC68_AlbumPlayList",
 "label": "Photo Album Creamy Yellow Childish Calendar 2023 Calendar_page-0005",
 "class": "PhotoAlbum"
},
{
 "thumbnailUrl": "media/album_BED3A380_AEF3_E25B_41C8_F7103B3D3318_t.png",
 "id": "album_BED3A380_AEF3_E25B_41C8_F7103B3D3318",
 "playList": "this.album_BED3A380_AEF3_E25B_41C8_F7103B3D3318_AlbumPlayList",
 "label": "Photo Album Creamy Yellow Childish Calendar 2023 Calendar_page-0004",
 "class": "PhotoAlbum"
},
{
 "width": 3000,
 "fieldOfViewOverlayOutsideColor": "#000000",
 "fieldOfViewOverlayOutsideOpacity": 0,
 "image": {
  "levels": [
   {
    "url": "media/map_A1A237CB_AEBF_0B9E_4199_9580A2B83CBC.jpeg",
    "width": 3000,
    "class": "ImageResourceLevel",
    "height": 1688
   },
   {
    "url": "media/map_A1A237CB_AEBF_0B9E_4199_9580A2B83CBC_lq.jpeg",
    "width": 341,
    "tags": "preload",
    "class": "ImageResourceLevel",
    "height": 192
   }
  ],
  "class": "ImageResource"
 },
 "thumbnailUrl": "media/map_A1A237CB_AEBF_0B9E_4199_9580A2B83CBC_t.jpg",
 "id": "map_A1A237CB_AEBF_0B9E_4199_9580A2B83CBC",
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "fieldOfViewOverlayRadiusScale": 0.3,
 "maximumZoomFactor": 1.2,
 "scaleMode": "fit_inside",
 "class": "Map",
 "minimumZoomFactor": 0.5,
 "initialZoomFactor": 1,
 "label": "Creamy Yellow Childish Calendar 2023 Calendar_page-0004",
 "height": 1688
},
{
 "playbackBarBottom": 5,
 "toolTipBorderColor": "#767676",
 "id": "MainViewer",
 "left": 0,
 "paddingLeft": 0,
 "playbackBarHeadOpacity": 1,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "class": "ViewerArea",
 "toolTipShadowBlurRadius": 3,
 "toolTipOpacity": 0.5,
 "paddingBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "toolTipFontSize": 13,
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "width": "100%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "minHeight": 50,
 "toolTipPaddingBottom": 7,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "transitionDuration": 500,
 "toolTipShadowColor": "#333333",
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "progressBarBorderSize": 0,
 "minWidth": 100,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipShadowOpacity": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarProgressBorderColor": "#000000",
 "shadow": false,
 "toolTipFontFamily": "Georgia",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "propagateClick": true,
 "progressLeft": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipTextShadowOpacity": 0,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#000000",
 "playbackBarHeadShadowColor": "#000000",
 "displayTooltipInTouchScreens": true,
 "paddingRight": 0,
 "borderSize": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "toolTipFontColor": "#FFFFFF",
 "progressBarBackgroundColorDirection": "vertical",
 "transitionMode": "blending",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressRight": 0,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "firstTransitionDuration": 0,
 "progressBottom": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "top": 0,
 "playbackBarOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 10,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 10,
 "toolTipPaddingTop": 7,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipDisplayTime": 600,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "playbackBarLeft": 0,
 "paddingTop": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF"
},
{
 "children": [
  "this.Label_0C5F13A8_3BA0_A6FF_41BD_E3D21CFCE151",
  "this.Label_0C5F23A8_3BA0_A6FF_419F_468451E37918"
 ],
 "id": "Container_0C5F33A8_3BA0_A6FF_41C3_2A6652E2CE94",
 "left": 30,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingBottom": 0,
 "scrollBarMargin": 2,
 "minHeight": 1,
 "width": 271,
 "scrollBarWidth": 10,
 "contentOpaque": false,
 "bottom": 20,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundOpacity": 0,
 "horizontalAlign": "left",
 "gap": 10,
 "overflow": "visible",
 "height": 97,
 "layout": "absolute",
 "borderRadius": 0,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "--STICKER"
 },
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Label_0E9CEE5D_36F3_E64E_419C_5A94FA5D3CA1",
  "this.Image_05314BAF_3AA1_A6F2_41CB_86A11240FA50",
  "this.Container_0542AAAA_3AA3_A6F3_41B2_0E208ADBBBE1"
 ],
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "left": "0%",
 "paddingRight": 0,
 "class": "Container",
 "right": "0%",
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "contentOpaque": false,
 "top": 0,
 "height": 60,
 "verticalAlign": "top",
 "backgroundColor": [
  "#F7931E"
 ],
 "backgroundOpacity": 1,
 "minWidth": 1,
 "horizontalAlign": "left",
 "gap": 10,
 "overflow": "visible",
 "layout": "absolute",
 "borderRadius": 0,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "--BUTTON SET"
 },
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver"
},
{
 "children": [
  "this.Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0",
  "this.Button_485BFF41_598E_3DB2_41A9_33F36E014467",
  "this.Button_4C5C0864_5A8E_C472_41C4_7C0748488A41",
  "this.Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA",
  "this.Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A"
 ],
 "id": "Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4",
 "paddingRight": 0,
 "class": "Container",
 "right": 15,
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "width": 60,
 "minHeight": 1,
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "contentOpaque": false,
 "top": 62,
 "verticalAlign": "middle",
 "height": 300,
 "backgroundOpacity": 1,
 "minWidth": 1,
 "horizontalAlign": "center",
 "gap": 0,
 "overflow": "scroll",
 "backgroundColor": [
  "#F7931E"
 ],
 "layout": "vertical",
 "borderRadius": 0,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "-button set"
 },
 "backgroundColorRatios": [
  0.02
 ],
 "propagateClick": false,
 "visible": false,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver"
},
{
 "children": [
  "this.IconButton_7B212C50_3AA0_A1AF_41C5_F659ED22BD52",
  "this.IconButton_7B21DC51_3AA0_A251_41B1_CEAABC2475F8",
  "this.IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0",
  "this.IconButton_7B21FC51_3AA0_A251_41CC_46CDE74591EA",
  "this.IconButton_7B206C51_3AA0_A251_41A3_B3DB657BC52B",
  "this.IconButton_7B201C51_3AA0_A251_41CD_5CC0A59F2DE8",
  "this.IconButton_7B200C51_3AA0_A251_41CC_7E57609B3C93"
 ],
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 30,
 "class": "Container",
 "borderSize": 0,
 "paddingBottom": 0,
 "scrollBarMargin": 2,
 "minHeight": 1,
 "width": "100%",
 "scrollBarWidth": 10,
 "contentOpaque": false,
 "bottom": "0%",
 "minWidth": 1,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "horizontalAlign": "right",
 "gap": 3,
 "overflow": "scroll",
 "height": 90,
 "layout": "horizontal",
 "borderRadius": 0,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "-button set container"
 },
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5
},
{
 "creationPolicy": "inAdvance",
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Container",
 "right": "0%",
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "contentOpaque": false,
 "top": "0%",
 "bottom": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 10,
 "overflow": "scroll",
 "horizontalAlign": "left",
 "layout": "absolute",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "---INFO photo"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "visible": false,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver"
},
{
 "creationPolicy": "inAdvance",
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Container",
 "right": "0%",
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "contentOpaque": false,
 "top": "0%",
 "bottom": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 10,
 "overflow": "scroll",
 "horizontalAlign": "left",
 "layout": "absolute",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "---PANORAMA LIST"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "visible": false,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver"
},
{
 "creationPolicy": "inAdvance",
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Container",
 "right": "0%",
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "contentOpaque": false,
 "top": "0%",
 "bottom": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 10,
 "overflow": "scroll",
 "horizontalAlign": "left",
 "layout": "absolute",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "---LOCATION"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "visible": false,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver"
},
{
 "creationPolicy": "inAdvance",
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Container",
 "right": "0%",
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "contentOpaque": false,
 "top": "0%",
 "bottom": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 10,
 "overflow": "scroll",
 "horizontalAlign": "left",
 "layout": "absolute",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "---FLOORPLAN"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "visible": false,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver"
},
{
 "creationPolicy": "inAdvance",
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Container",
 "right": "0%",
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "contentOpaque": false,
 "top": "0%",
 "bottom": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 10,
 "overflow": "scroll",
 "horizontalAlign": "left",
 "layout": "absolute",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "---PHOTOALBUM"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "visible": false,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver"
},
{
 "creationPolicy": "inAdvance",
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Container",
 "right": "0%",
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "contentOpaque": false,
 "top": "0%",
 "bottom": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 10,
 "overflow": "scroll",
 "horizontalAlign": "left",
 "layout": "absolute",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "---REALTOR"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "visible": false,
 "scrollBarColor": "#04A3E1",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver"
},
{
 "fontFamily": "Arial",
 "fontColor": "#FFFFFF",
 "id": "Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A",
 "rollOverBackgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Button",
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "iconHeight": 30,
 "minHeight": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "width": 60,
 "pressedIconHeight": 30,
 "borderColor": "#000000",
 "pressedRollOverBackgroundColor": [
  "#CE6700"
 ],
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "pressedIconWidth": 30,
 "verticalAlign": "middle",
 "height": 60,
 "fontSize": 12,
 "mode": "toggle",
 "backgroundOpacity": 1,
 "minWidth": 1,
 "gap": 5,
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#F7931E"
 ],
 "horizontalAlign": "center",
 "fontStyle": "normal",
 "pressedIconURL": "skin/Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A_pressed.png",
 "borderRadius": 0,
 "layout": "horizontal",
 "shadow": false,
 "data": {
  "name": "Button Settings Fullscreen"
 },
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "paddingTop": 0,
 "iconURL": "skin/Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A.png",
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "iconWidth": 30
},
{
 "fontFamily": "Arial",
 "fontColor": "#FFFFFF",
 "id": "Button_4C5C0864_5A8E_C472_41C4_7C0748488A41",
 "rollOverBackgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Button",
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "iconHeight": 30,
 "minHeight": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "width": 60,
 "pressedIconHeight": 30,
 "borderColor": "#000000",
 "pressedRollOverBackgroundColor": [
  "#CE6700"
 ],
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "pressedIconWidth": 30,
 "verticalAlign": "middle",
 "height": 60,
 "fontSize": 12,
 "mode": "toggle",
 "backgroundOpacity": 1,
 "minWidth": 1,
 "gap": 5,
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#F7931E"
 ],
 "horizontalAlign": "center",
 "fontStyle": "normal",
 "pressedIconURL": "skin/Button_4C5C0864_5A8E_C472_41C4_7C0748488A41_pressed.png",
 "borderRadius": 0,
 "layout": "horizontal",
 "shadow": false,
 "data": {
  "name": "Button Settings Mute"
 },
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "paddingTop": 0,
 "iconURL": "skin/Button_4C5C0864_5A8E_C472_41C4_7C0748488A41.png",
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "iconWidth": 30
},
{
 "media": "this.album_BCE121E6_AEFF_A1A7_41D4_767447BDFD6C",
 "class": "PhotoAlbumPlayListItem",
 "begin": "this.updateMediaLabelFromPlayList(this.album_BCE121E6_AEFF_A1A7_41D4_767447BDFD6C_AlbumPlayList, this.htmltext_BAD58526_AF13_E6A6_41DA_B19FD4E41172, this.albumitem_BAD51526_AF13_E6A6_41E0_EAE687ED4471); this.loopAlbum(this.playList_BBB2F82A_AEEC_EEAE_41DC_F1385FEB0467, 0)",
 "player": "this.viewer_uidBAD6A526_AF13_E6A6_41DB_DFA8F23E4BCAPhotoAlbumPlayer",
 "id": "albumitem_BAD51526_AF13_E6A6_41E0_EAE687ED4471"
},
{
 "media": "this.album_BC9A9C53_AEF3_A6FE_41D8_F798402EAFB5",
 "class": "PhotoAlbumPlayListItem",
 "begin": "this.updateMediaLabelFromPlayList(this.album_BC9A9C53_AEF3_A6FE_41D8_F798402EAFB5_AlbumPlayList, this.htmltext_BAE45536_AF13_E6A6_41BA_A1E1DF297F33, this.albumitem_BADD2536_AF13_E6A6_41DA_14CD9B44F228); this.loopAlbum(this.playList_BBAC283A_AEEC_EEAE_4151_CFFF967B27EB, 0)",
 "player": "this.viewer_uidBADCD536_AF13_E6A6_41B3_44138BE70ACAPhotoAlbumPlayer",
 "id": "albumitem_BADD2536_AF13_E6A6_41DA_14CD9B44F228"
},
{
 "media": "this.album_BC054606_AEF4_E266_41E2_4612D1C467A2",
 "class": "PhotoAlbumPlayListItem",
 "begin": "this.updateMediaLabelFromPlayList(this.album_BC054606_AEF4_E266_41E2_4612D1C467A2_AlbumPlayList, this.htmltext_BAD9E536_AF13_E6A6_41E5_D9F4646D6909, this.albumitem_BAD91526_AF13_E6A6_41DB_6F707DF759DE); this.loopAlbum(this.playList_BBB0C82A_AEEC_EEAE_41D5_35F7E8339A5F, 0)",
 "player": "this.viewer_uidBAD8C526_AF13_E6A6_41B6_92D9DE6754DEPhotoAlbumPlayer",
 "id": "albumitem_BAD91526_AF13_E6A6_41DB_6F707DF759DE"
},
{
 "children": [
  "this.viewer_uidBAE98536_AF13_E6A6_41DC_A053992ACAE2",
  {
   "children": [
    "this.htmltext_BAEAB536_AF13_E6A6_41A9_DCB6DE960340"
   ],
   "left": 0,
   "paddingRight": 0,
   "class": "Container",
   "right": 0,
   "borderSize": 0,
   "paddingLeft": 0,
   "paddingBottom": 0,
   "backgroundColorDirection": "vertical",
   "minHeight": 20,
   "scrollBarMargin": 2,
   "scrollBarWidth": 7,
   "contentOpaque": true,
   "bottom": 0,
   "backgroundColor": [],
   "verticalAlign": "bottom",
   "minWidth": 20,
   "backgroundOpacity": 0.3,
   "horizontalAlign": "left",
   "gap": 10,
   "overflow": "scroll",
   "layout": "vertical",
   "borderRadius": 0,
   "height": "30%",
   "shadow": false,
   "paddingTop": 0,
   "data": {
    "name": "Container20267"
   },
   "backgroundColorRatios": [],
   "propagateClick": false,
   "scrollBarColor": "#FFFFFF",
   "scrollBarVisible": "rollOver",
   "scrollBarOpacity": 0.5
  },
  "this.component_BAEB2536_AF13_E6A6_41A9_A35182525562",
  "this.component_BAEB1536_AF13_E6A6_41E4_CB51D56747B0"
 ],
 "id": "container_BAEA3536_AF13_E6A6_41E0_CBC2E0AD9CB5",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "minHeight": 20,
 "width": "100%",
 "scrollBarWidth": 10,
 "contentOpaque": false,
 "backgroundColor": [],
 "verticalAlign": "top",
 "minWidth": 20,
 "backgroundOpacity": 0.3,
 "horizontalAlign": "left",
 "gap": 10,
 "overflow": "scroll",
 "layout": "absolute",
 "borderRadius": 0,
 "height": "100%",
 "shadow": false,
 "data": {
  "name": "Container20266"
 },
 "backgroundColorRatios": [],
 "propagateClick": false,
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5
},
{
 "items": [
  {
   "media": "this.album_BC9A9C53_AEF3_A6FE_41D8_F798402EAFB5_0",
   "camera": {
    "easing": "linear",
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.72",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.73"
    },
    "scaleMode": "fit_outside"
   },
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_BC9A9C53_AEF3_A6FE_41D8_F798402EAFB5_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "items": [
  {
   "media": "this.album_BCE121E6_AEFF_A1A7_41D4_767447BDFD6C_0",
   "camera": {
    "easing": "linear",
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.52",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.74"
    },
    "scaleMode": "fit_outside"
   },
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_BCE121E6_AEFF_A1A7_41D4_767447BDFD6C_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "children": [
  "this.viewer_uidBADAC536_AF13_E6A6_41D9_45B98B350A57",
  {
   "children": [
    "this.htmltext_BADB9536_AF13_E6A6_41D3_D25DED52E319"
   ],
   "left": 0,
   "paddingRight": 0,
   "class": "Container",
   "right": 0,
   "borderSize": 0,
   "paddingLeft": 0,
   "paddingBottom": 0,
   "backgroundColorDirection": "vertical",
   "minHeight": 20,
   "scrollBarMargin": 2,
   "scrollBarWidth": 7,
   "contentOpaque": true,
   "bottom": 0,
   "backgroundColor": [],
   "verticalAlign": "bottom",
   "minWidth": 20,
   "backgroundOpacity": 0.3,
   "horizontalAlign": "left",
   "gap": 10,
   "overflow": "scroll",
   "layout": "vertical",
   "borderRadius": 0,
   "height": "30%",
   "shadow": false,
   "paddingTop": 0,
   "data": {
    "name": "Container20243"
   },
   "backgroundColorRatios": [],
   "propagateClick": false,
   "scrollBarColor": "#FFFFFF",
   "scrollBarVisible": "rollOver",
   "scrollBarOpacity": 0.5
  },
  "this.component_BADC6536_AF13_E6A6_41A3_2AE8DBF01255",
  "this.component_BADC4536_AF13_E6A6_41E2_327C65C61CBB"
 ],
 "id": "container_BADB6536_AF13_E6A6_41E0_15C7597D2859",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "minHeight": 20,
 "width": "100%",
 "scrollBarWidth": 10,
 "contentOpaque": false,
 "backgroundColor": [],
 "verticalAlign": "top",
 "minWidth": 20,
 "backgroundOpacity": 0.3,
 "horizontalAlign": "left",
 "gap": 10,
 "overflow": "scroll",
 "layout": "absolute",
 "borderRadius": 0,
 "height": "100%",
 "shadow": false,
 "data": {
  "name": "Container20242"
 },
 "backgroundColorRatios": [],
 "propagateClick": false,
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.viewer_uidBAD09526_AF13_E6A6_41D1_C6FD3B2C4498",
  {
   "children": [
    "this.htmltext_BAD16526_AF13_E6A6_41CB_4F0A2D4FD5B6"
   ],
   "left": 0,
   "paddingRight": 0,
   "class": "Container",
   "right": 0,
   "borderSize": 0,
   "paddingLeft": 0,
   "paddingBottom": 0,
   "backgroundColorDirection": "vertical",
   "minHeight": 20,
   "scrollBarMargin": 2,
   "scrollBarWidth": 7,
   "contentOpaque": true,
   "bottom": 0,
   "backgroundColor": [],
   "verticalAlign": "bottom",
   "minWidth": 20,
   "backgroundOpacity": 0.3,
   "horizontalAlign": "left",
   "gap": 10,
   "overflow": "scroll",
   "layout": "vertical",
   "borderRadius": 0,
   "height": "30%",
   "shadow": false,
   "paddingTop": 0,
   "data": {
    "name": "Container20207"
   },
   "backgroundColorRatios": [],
   "propagateClick": false,
   "scrollBarColor": "#FFFFFF",
   "scrollBarVisible": "rollOver",
   "scrollBarOpacity": 0.5
  },
  "this.component_BAD1D526_AF13_E6A6_41D3_DBDBCCC7E949",
  "this.component_BAD1C526_AF13_E6A6_41DA_6DA447220A46"
 ],
 "id": "container_BAD13526_AF13_E6A6_418D_4528468393EB",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "minHeight": 20,
 "width": "100%",
 "scrollBarWidth": 10,
 "contentOpaque": false,
 "backgroundColor": [],
 "verticalAlign": "top",
 "minWidth": 20,
 "backgroundOpacity": 0.3,
 "horizontalAlign": "left",
 "gap": 10,
 "overflow": "scroll",
 "layout": "absolute",
 "borderRadius": 0,
 "height": "100%",
 "shadow": false,
 "data": {
  "name": "Container20206"
 },
 "backgroundColorRatios": [],
 "propagateClick": false,
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5
},
{
 "items": [
  {
   "media": "this.album_BDC825C0_AEEC_A1DA_41E4_E28DB43D7F44_0",
   "camera": {
    "easing": "linear",
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.68",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.32"
    },
    "scaleMode": "fit_outside"
   },
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_BDC825C0_AEEC_A1DA_41E4_E28DB43D7F44_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "media": "this.album_BDC825C0_AEEC_A1DA_41E4_E28DB43D7F44",
 "class": "PhotoAlbumPlayListItem",
 "begin": "this.updateMediaLabelFromPlayList(this.album_BDC825C0_AEEC_A1DA_41E4_E28DB43D7F44_AlbumPlayList, this.htmltext_BAE8B536_AF13_E6A6_41E2_B6C3B8B8E1A5, this.albumitem_BAE7E536_AF13_E6A6_41E2_A3139798DFCB); this.loopAlbum(this.playList_BBABF83A_AEEC_EEAE_41E3_473F03B45DF3, 0)",
 "player": "this.viewer_uidBAE7F536_AF13_E6A6_41AC_669F5BCAA113PhotoAlbumPlayer",
 "id": "albumitem_BAE7E536_AF13_E6A6_41E2_A3139798DFCB"
},
{
 "media": "this.album_BC069925_AEEF_AE5A_41CD_AF5B19FDD624",
 "class": "PhotoAlbumPlayListItem",
 "begin": "this.updateMediaLabelFromPlayList(this.album_BC069925_AEEF_AE5A_41CD_AF5B19FDD624_AlbumPlayList, this.htmltext_BAEAB536_AF13_E6A6_41A9_DCB6DE960340, this.albumitem_BAE9D536_AF13_E6A6_41E1_05DC1E983C7C); this.loopAlbum(this.playList_BBA9D83A_AEEC_EEAE_41E4_29415377B4CE, 0)",
 "player": "this.viewer_uidBAE98536_AF13_E6A6_41DC_A053992ACAE2PhotoAlbumPlayer",
 "id": "albumitem_BAE9D536_AF13_E6A6_41E1_05DC1E983C7C"
},
{
 "items": [
  {
   "media": "this.album_A16FDC01_AEEC_665A_41D2_05CD2E62EB33_0",
   "camera": {
    "easing": "linear",
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.53",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.46"
    },
    "scaleMode": "fit_outside"
   },
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_A16FDC01_AEEC_665A_41D2_05CD2E62EB33_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "children": [
  "this.viewer_uidBAD8C526_AF13_E6A6_41B6_92D9DE6754DE",
  {
   "children": [
    "this.htmltext_BAD9E536_AF13_E6A6_41E5_D9F4646D6909"
   ],
   "left": 0,
   "paddingRight": 0,
   "class": "Container",
   "right": 0,
   "borderSize": 0,
   "paddingLeft": 0,
   "paddingBottom": 0,
   "backgroundColorDirection": "vertical",
   "minHeight": 20,
   "scrollBarMargin": 2,
   "scrollBarWidth": 7,
   "contentOpaque": true,
   "bottom": 0,
   "backgroundColor": [],
   "verticalAlign": "bottom",
   "minWidth": 20,
   "backgroundOpacity": 0.3,
   "horizontalAlign": "left",
   "gap": 10,
   "overflow": "scroll",
   "layout": "vertical",
   "borderRadius": 0,
   "height": "30%",
   "shadow": false,
   "paddingTop": 0,
   "data": {
    "name": "Container20237"
   },
   "backgroundColorRatios": [],
   "propagateClick": false,
   "scrollBarColor": "#FFFFFF",
   "scrollBarVisible": "rollOver",
   "scrollBarOpacity": 0.5
  },
  "this.component_BADA5536_AF13_E6A6_41E0_E7BA09632F10",
  "this.component_BADA4536_AF13_E6A6_41DB_59BE0F819A05"
 ],
 "id": "container_BAD94536_AF13_E6A6_41C7_4C200D8D5A28",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "minHeight": 20,
 "width": "100%",
 "scrollBarWidth": 10,
 "contentOpaque": false,
 "backgroundColor": [],
 "verticalAlign": "top",
 "minWidth": 20,
 "backgroundOpacity": 0.3,
 "horizontalAlign": "left",
 "gap": 10,
 "overflow": "scroll",
 "layout": "absolute",
 "borderRadius": 0,
 "height": "100%",
 "shadow": false,
 "data": {
  "name": "Container20236"
 },
 "backgroundColorRatios": [],
 "propagateClick": false,
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5
},
{
 "media": "this.album_BF876CE6_AEEC_67A6_41E4_F0A11BCE9BA9",
 "class": "PhotoAlbumPlayListItem",
 "begin": "this.updateMediaLabelFromPlayList(this.album_BF876CE6_AEEC_67A6_41E4_F0A11BCE9BA9_AlbumPlayList, this.htmltext_BAE66536_AF13_E6A6_41DE_C1E037962704, this.albumitem_BAE58536_AF13_E6A6_41E4_DA423DC4E233); this.loopAlbum(this.playList_BBAD983A_AEEC_EEAE_41E4_FAE7C75E411B, 0)",
 "player": "this.viewer_uidBAE59536_AF13_E6A6_41E0_E32EB75CF69FPhotoAlbumPlayer",
 "id": "albumitem_BAE58536_AF13_E6A6_41E4_DA423DC4E233"
},
{
 "media": "this.album_A16FDC01_AEEC_665A_41D2_05CD2E62EB33",
 "class": "PhotoAlbumPlayListItem",
 "begin": "this.updateMediaLabelFromPlayList(this.album_A16FDC01_AEEC_665A_41D2_05CD2E62EB33_AlbumPlayList, this.htmltext_BACF5526_AF13_E6A6_41D6_71D2214A4A4F, this.albumitem_BACED526_AF13_E6A6_41E3_DC9BF884463A); this.loopAlbum(this.playList_BBC2B81A_AEEC_EE6F_41E4_9F2C8C73A9C2, 0)",
 "player": "this.viewer_uidBACE8526_AF13_E6A6_41C9_1D09FF994932PhotoAlbumPlayer",
 "id": "albumitem_BACED526_AF13_E6A6_41E3_DC9BF884463A"
},
{
 "media": "this.album_BCD5AD6C_AEF5_A6AA_41BE_946CB7071D34",
 "class": "PhotoAlbumPlayListItem",
 "begin": "this.updateMediaLabelFromPlayList(this.album_BCD5AD6C_AEF5_A6AA_41BE_946CB7071D34_AlbumPlayList, this.htmltext_BADB9536_AF13_E6A6_41D3_D25DED52E319, this.albumitem_BADB1536_AF13_E6A6_41DF_7C1049F37125); this.loopAlbum(this.playList_BBAED82A_AEEC_EEAE_41E2_787CB9347141, 0)",
 "player": "this.viewer_uidBADAC536_AF13_E6A6_41D9_45B98B350A57PhotoAlbumPlayer",
 "id": "albumitem_BADB1536_AF13_E6A6_41DF_7C1049F37125"
},
{
 "children": [
  "this.viewer_uidBAE7F536_AF13_E6A6_41AC_669F5BCAA113",
  {
   "children": [
    "this.htmltext_BAE8B536_AF13_E6A6_41E2_B6C3B8B8E1A5"
   ],
   "left": 0,
   "paddingRight": 0,
   "class": "Container",
   "right": 0,
   "borderSize": 0,
   "paddingLeft": 0,
   "paddingBottom": 0,
   "backgroundColorDirection": "vertical",
   "minHeight": 20,
   "scrollBarMargin": 2,
   "scrollBarWidth": 7,
   "contentOpaque": true,
   "bottom": 0,
   "backgroundColor": [],
   "verticalAlign": "bottom",
   "minWidth": 20,
   "backgroundOpacity": 0.3,
   "horizontalAlign": "left",
   "gap": 10,
   "overflow": "scroll",
   "layout": "vertical",
   "borderRadius": 0,
   "height": "30%",
   "shadow": false,
   "paddingTop": 0,
   "data": {
    "name": "Container20261"
   },
   "backgroundColorRatios": [],
   "propagateClick": false,
   "scrollBarColor": "#FFFFFF",
   "scrollBarVisible": "rollOver",
   "scrollBarOpacity": 0.5
  },
  "this.component_BAE91536_AF13_E6A6_41C7_8469CF09CC58",
  "this.component_BAE97536_AF13_E6A6_41D1_5EBBA2369620"
 ],
 "id": "container_BAE80536_AF13_E6A6_41E2_30F8DEC547BE",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "minHeight": 20,
 "width": "100%",
 "scrollBarWidth": 10,
 "contentOpaque": false,
 "backgroundColor": [],
 "verticalAlign": "top",
 "minWidth": 20,
 "backgroundOpacity": 0.3,
 "horizontalAlign": "left",
 "gap": 10,
 "overflow": "scroll",
 "layout": "absolute",
 "borderRadius": 0,
 "height": "100%",
 "shadow": false,
 "data": {
  "name": "Container20260"
 },
 "backgroundColorRatios": [],
 "propagateClick": false,
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5
},
{
 "media": "this.album_A15985E7_AEF4_61A6_41A0_06BDF6E342D7",
 "class": "PhotoAlbumPlayListItem",
 "begin": "this.updateMediaLabelFromPlayList(this.album_A15985E7_AEF4_61A6_41A0_06BDF6E342D7_AlbumPlayList, this.htmltext_BAD16526_AF13_E6A6_41CB_4F0A2D4FD5B6, this.albumitem_BAD0E526_AF13_E6A6_41B5_B0A7960EF6FB); this.loopAlbum(this.playList_BBB6882A_AEEC_EEAE_41CC_305E5AE27E72, 0)",
 "player": "this.viewer_uidBAD09526_AF13_E6A6_41D1_C6FD3B2C4498PhotoAlbumPlayer",
 "id": "albumitem_BAD0E526_AF13_E6A6_41B5_B0A7960EF6FB"
},
{
 "maxHeight": 60,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "borderSize": 0,
 "paddingBottom": 0,
 "minHeight": 50,
 "width": "14.22%",
 "top": "20%",
 "bottom": "20%",
 "minWidth": 50,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "mode": "push",
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "borderRadius": 0,
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": false,
 "propagateClick": false,
 "cursor": "hand",
 "maxWidth": 60,
 "data": {
  "name": "IconButton <"
 }
},
{
 "maxHeight": 60,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "borderSize": 0,
 "paddingBottom": 0,
 "right": 10,
 "minHeight": 50,
 "width": "14.22%",
 "top": "20%",
 "bottom": "20%",
 "minWidth": 50,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "mode": "push",
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "borderRadius": 0,
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": false,
 "propagateClick": false,
 "cursor": "hand",
 "maxWidth": 60,
 "data": {
  "name": "IconButton >"
 }
},
{
 "items": [
  {
   "media": "this.album_BF876CE6_AEEC_67A6_41E4_F0A11BCE9BA9_0",
   "camera": {
    "easing": "linear",
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.27",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.74"
    },
    "scaleMode": "fit_outside"
   },
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_BF876CE6_AEEC_67A6_41E4_F0A11BCE9BA9_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "playbackBarBottom": 0,
 "toolTipBorderColor": "#767676",
 "id": "MapViewer",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "playbackBarHeadOpacity": 1,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "class": "ViewerArea",
 "toolTipShadowBlurRadius": 3,
 "toolTipOpacity": 1,
 "paddingBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "toolTipFontSize": 12,
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "width": "100%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "minHeight": 1,
 "toolTipPaddingBottom": 4,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "transitionDuration": 500,
 "toolTipShadowColor": "#333333",
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "progressBarBorderSize": 0,
 "minWidth": 1,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarProgressBorderColor": "#000000",
 "shadow": false,
 "toolTipFontFamily": "Arial",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "propagateClick": false,
 "progressLeft": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipTextShadowOpacity": 0,
 "playbackBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "displayTooltipInTouchScreens": true,
 "paddingRight": 0,
 "borderSize": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "toolTipFontColor": "#606060",
 "progressBarBackgroundColorDirection": "vertical",
 "transitionMode": "blending",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressRight": 0,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "firstTransitionDuration": 0,
 "progressBottom": 2,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "playbackBarLeft": 0,
 "paddingTop": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "data": {
  "name": "Floor Plan"
 },
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF"
},
{
 "children": [
  "this.viewer_uidBAD6A526_AF13_E6A6_41DB_DFA8F23E4BCA",
  {
   "children": [
    "this.htmltext_BAD58526_AF13_E6A6_41DA_B19FD4E41172"
   ],
   "left": 0,
   "paddingRight": 0,
   "class": "Container",
   "right": 0,
   "borderSize": 0,
   "paddingLeft": 0,
   "paddingBottom": 0,
   "backgroundColorDirection": "vertical",
   "minHeight": 20,
   "scrollBarMargin": 2,
   "scrollBarWidth": 7,
   "contentOpaque": true,
   "bottom": 0,
   "backgroundColor": [],
   "verticalAlign": "bottom",
   "minWidth": 20,
   "backgroundOpacity": 0.3,
   "horizontalAlign": "left",
   "gap": 10,
   "overflow": "scroll",
   "layout": "vertical",
   "borderRadius": 0,
   "height": "30%",
   "shadow": false,
   "paddingTop": 0,
   "data": {
    "name": "Container20225"
   },
   "backgroundColorRatios": [],
   "propagateClick": false,
   "scrollBarColor": "#FFFFFF",
   "scrollBarVisible": "rollOver",
   "scrollBarOpacity": 0.5
  },
  "this.component_BAD66526_AF13_E6A6_41CA_A10E2046D86D",
  "this.component_BAD65526_AF13_E6A6_41DA_90F2E26A19C4"
 ],
 "id": "container_BAD56526_AF13_E6A6_41C7_0840B8FE1BFE",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "minHeight": 20,
 "width": "100%",
 "scrollBarWidth": 10,
 "contentOpaque": false,
 "backgroundColor": [],
 "verticalAlign": "top",
 "minWidth": 20,
 "backgroundOpacity": 0.3,
 "horizontalAlign": "left",
 "gap": 10,
 "overflow": "scroll",
 "layout": "absolute",
 "borderRadius": 0,
 "height": "100%",
 "shadow": false,
 "data": {
  "name": "Container20224"
 },
 "backgroundColorRatios": [],
 "propagateClick": false,
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.viewer_uidBACE8526_AF13_E6A6_41C9_1D09FF994932",
  {
   "children": [
    "this.htmltext_BACF5526_AF13_E6A6_41D6_71D2214A4A4F"
   ],
   "left": 0,
   "paddingRight": 0,
   "class": "Container",
   "right": 0,
   "borderSize": 0,
   "paddingLeft": 0,
   "paddingBottom": 0,
   "backgroundColorDirection": "vertical",
   "minHeight": 20,
   "scrollBarMargin": 2,
   "scrollBarWidth": 7,
   "contentOpaque": true,
   "bottom": 0,
   "backgroundColor": [],
   "verticalAlign": "bottom",
   "minWidth": 20,
   "backgroundOpacity": 0.3,
   "horizontalAlign": "left",
   "gap": 10,
   "overflow": "scroll",
   "layout": "vertical",
   "borderRadius": 0,
   "height": "30%",
   "shadow": false,
   "paddingTop": 0,
   "data": {
    "name": "Container20201"
   },
   "backgroundColorRatios": [],
   "propagateClick": false,
   "scrollBarColor": "#FFFFFF",
   "scrollBarVisible": "rollOver",
   "scrollBarOpacity": 0.5
  },
  "this.component_BAD02526_AF13_E6A6_41D1_1BF5F3369CCF",
  "this.component_BAD01526_AF13_E6A6_41E4_228DD34C5A64"
 ],
 "id": "container_BACF2526_AF13_E6A6_41B5_903CABE88D37",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "minHeight": 20,
 "width": "100%",
 "scrollBarWidth": 10,
 "contentOpaque": false,
 "backgroundColor": [],
 "verticalAlign": "top",
 "minWidth": 20,
 "backgroundOpacity": 0.3,
 "horizontalAlign": "left",
 "gap": 10,
 "overflow": "scroll",
 "layout": "absolute",
 "borderRadius": 0,
 "height": "100%",
 "shadow": false,
 "data": {
  "name": "Container20200"
 },
 "backgroundColorRatios": [],
 "propagateClick": false,
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5
},
{
 "media": "this.album_BF0DE890_AEFD_EE7B_418A_7985CA64AC68",
 "class": "PhotoAlbumPlayListItem",
 "begin": "this.updateMediaLabelFromPlayList(this.album_BF0DE890_AEFD_EE7B_418A_7985CA64AC68_AlbumPlayList, this.htmltext_BAD56526_AF13_E6A6_4171_9D43BE5B420B, this.albumitem_BAD4F526_AF13_E6A6_41D2_C93F460FDD21); this.loopAlbum(this.playList_BBB4282A_AEEC_EEAE_41D3_58262914BC8D, 0)",
 "player": "this.viewer_uidBAD4B526_AF13_E6A6_41C7_DA560EFFB6A7PhotoAlbumPlayer",
 "id": "albumitem_BAD4F526_AF13_E6A6_41D2_C93F460FDD21"
},
{
 "media": "this.album_BE20707D_AEF5_9EAA_41D7_A89337166D82",
 "class": "PhotoAlbumPlayListItem",
 "begin": "this.updateMediaLabelFromPlayList(this.album_BE20707D_AEF5_9EAA_41D7_A89337166D82_AlbumPlayList, this.htmltext_BAD7A526_AF13_E6A6_41B7_9C53373F7607, this.albumitem_BAD73526_AF13_E6A6_41E0_82A38F609D34); this.loopAlbum(this.playList_BBB0882A_AEEC_EEAE_41B8_73846643C4C4, 0)",
 "player": "this.viewer_uidBAD6D526_AF13_E6A6_41D4_EAB0E8E1A68BPhotoAlbumPlayer",
 "id": "albumitem_BAD73526_AF13_E6A6_41E0_82A38F609D34"
},
{
 "items": [
  {
   "media": "this.album_BE20707D_AEF5_9EAA_41D7_A89337166D82_0",
   "camera": {
    "easing": "linear",
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.26",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.51"
    },
    "scaleMode": "fit_outside"
   },
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_BE20707D_AEF5_9EAA_41D7_A89337166D82_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "children": [
  "this.viewer_uidBAD4B526_AF13_E6A6_41C7_DA560EFFB6A7",
  {
   "children": [
    "this.htmltext_BAD56526_AF13_E6A6_4171_9D43BE5B420B"
   ],
   "left": 0,
   "paddingRight": 0,
   "class": "Container",
   "right": 0,
   "borderSize": 0,
   "paddingLeft": 0,
   "paddingBottom": 0,
   "backgroundColorDirection": "vertical",
   "minHeight": 20,
   "scrollBarMargin": 2,
   "scrollBarWidth": 7,
   "contentOpaque": true,
   "bottom": 0,
   "backgroundColor": [],
   "verticalAlign": "bottom",
   "minWidth": 20,
   "backgroundOpacity": 0.3,
   "horizontalAlign": "left",
   "gap": 10,
   "overflow": "scroll",
   "layout": "vertical",
   "borderRadius": 0,
   "height": "30%",
   "shadow": false,
   "paddingTop": 0,
   "data": {
    "name": "Container20219"
   },
   "backgroundColorRatios": [],
   "propagateClick": false,
   "scrollBarColor": "#FFFFFF",
   "scrollBarVisible": "rollOver",
   "scrollBarOpacity": 0.5
  },
  "this.component_BAD63526_AF13_E6A6_41DD_F579E9050E47",
  "this.component_BAD62526_AF13_E6A6_41C0_C22FF0396284"
 ],
 "id": "container_BAD53526_AF13_E6A6_41A3_2119AE2CCA05",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "minHeight": 20,
 "width": "100%",
 "scrollBarWidth": 10,
 "contentOpaque": false,
 "backgroundColor": [],
 "verticalAlign": "top",
 "minWidth": 20,
 "backgroundOpacity": 0.3,
 "horizontalAlign": "left",
 "gap": 10,
 "overflow": "scroll",
 "layout": "absolute",
 "borderRadius": 0,
 "height": "100%",
 "shadow": false,
 "data": {
  "name": "Container20218"
 },
 "backgroundColorRatios": [],
 "propagateClick": false,
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5
},
{
 "fontFamily": "Arial",
 "fontColor": "#FFFFFF",
 "id": "Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0",
 "rollOverBackgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Button",
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "iconHeight": 30,
 "minHeight": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "width": 60,
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "height": 60,
 "fontSize": 12,
 "mode": "push",
 "backgroundOpacity": 1,
 "minWidth": 1,
 "gap": 5,
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#F7931E"
 ],
 "horizontalAlign": "center",
 "fontStyle": "normal",
 "pressedIconURL": "skin/Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0_pressed.png",
 "borderRadius": 0,
 "layout": "horizontal",
 "shadow": false,
 "data": {
  "name": "Button settings VR"
 },
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "paddingTop": 0,
 "iconURL": "skin/Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0.png",
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "iconWidth": 30
},
{
 "rollOverIconHeight": 30,
 "fontFamily": "Arial",
 "fontColor": "#FFFFFF",
 "id": "Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA",
 "rollOverBackgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Button",
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "iconHeight": 30,
 "minHeight": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "width": 60,
 "pressedIconHeight": 30,
 "borderColor": "#000000",
 "pressedRollOverBackgroundColor": [
  "#CE6700"
 ],
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "pressedIconWidth": 30,
 "verticalAlign": "middle",
 "height": 60,
 "fontSize": 12,
 "mode": "toggle",
 "backgroundOpacity": 1,
 "minWidth": 1,
 "gap": 5,
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#F7931E"
 ],
 "horizontalAlign": "center",
 "fontStyle": "normal",
 "pressedIconURL": "skin/Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA_pressed.png",
 "borderRadius": 0,
 "layout": "horizontal",
 "shadow": false,
 "data": {
  "name": "Button Settings HS"
 },
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "paddingTop": 0,
 "rollOverIconWidth": 30,
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "iconWidth": 30,
 "iconURL": "skin/Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA.png"
},
{
 "rollOverIconHeight": 30,
 "fontFamily": "Arial",
 "fontColor": "#FFFFFF",
 "id": "Button_485BFF41_598E_3DB2_41A9_33F36E014467",
 "rollOverBackgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Button",
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "iconHeight": 30,
 "minHeight": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "width": 60,
 "pressedIconHeight": 30,
 "borderColor": "#000000",
 "pressedRollOverBackgroundColor": [
  "#CE6700"
 ],
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "pressedIconWidth": 30,
 "verticalAlign": "middle",
 "height": 60,
 "fontSize": 12,
 "mode": "toggle",
 "backgroundOpacity": 1,
 "minWidth": 1,
 "gap": 5,
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#F7931E"
 ],
 "horizontalAlign": "center",
 "fontStyle": "normal",
 "pressedIconURL": "skin/Button_485BFF41_598E_3DB2_41A9_33F36E014467_pressed.png",
 "borderRadius": 0,
 "layout": "horizontal",
 "shadow": false,
 "data": {
  "name": "Button Settings Gyro"
 },
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "paddingTop": 0,
 "rollOverIconWidth": 30,
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "iconWidth": 30,
 "iconURL": "skin/Button_485BFF41_598E_3DB2_41A9_33F36E014467.png"
},
{
 "items": [
  {
   "media": "this.album_BAF2C261_AEB3_048A_41B3_3CB84653342D_0",
   "camera": {
    "easing": "linear",
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.46",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.56"
    },
    "scaleMode": "fit_outside"
   },
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_BAF2C261_AEB3_048A_41B3_3CB84653342D_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_A5CC183A_AEB1_F1D4_41E3_C8DBC03FEACE_1_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -31.06,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.65,
   "hfov": 18.53
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A5CC183A_AEB1_F1D4_41E3_C8DBC03FEACE_1_HS_2_0.png",
      "width": 276,
      "class": "ImageResourceLevel",
      "height": 155
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.65,
   "yaw": -31.06,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.53
  }
 ],
 "id": "overlay_B81B78A9_AECF_059A_41DB_90344E02B5DB",
 "data": {
  "label": "Arrow 02a Left-Up"
 }
},
{
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_A5CC183A_AEB1_F1D4_41E3_C8DBC03FEACE_1_HS_3_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -19.09,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 12.76,
   "hfov": 18.03
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupMedia(this.window_A19928CE_AEEC_AFE6_41DE_A1F3A11C66F4, this.album_A16FDC01_AEEC_665A_41D2_05CD2E62EB33, this.playList_BBC2B81A_AEEC_EE6F_41E4_9F2C8C73A9C2, '90%', '90%', false, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A5CC183A_AEB1_F1D4_41E3_C8DBC03FEACE_1_HS_3_0.png",
      "width": 275,
      "class": "ImageResourceLevel",
      "height": 155
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 12.76,
   "yaw": -19.09,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.03
  }
 ],
 "id": "overlay_A125F283_AEEC_625D_41D8_10336A14244D",
 "data": {
  "label": "Arrow 01"
 }
},
{
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_A5CC183A_AEB1_F1D4_41E3_C8DBC03FEACE_1_HS_4_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -10.95,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.71,
   "hfov": 18.48
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupMedia(this.window_BF27474A_AEF5_A2EE_41E5_590F6D0E026B, this.album_A15985E7_AEF4_61A6_41A0_06BDF6E342D7, this.playList_BBB6882A_AEEC_EEAE_41CC_305E5AE27E72, '90%', '90%', false, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A5CC183A_AEB1_F1D4_41E3_C8DBC03FEACE_1_HS_4_0.png",
      "width": 275,
      "class": "ImageResourceLevel",
      "height": 155
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.71,
   "yaw": -10.95,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.48
  }
 ],
 "id": "overlay_BCBCE4D6_AEF4_A7E6_41C5_14562263979B",
 "data": {
  "label": "Arrow 01"
 }
},
{
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_A5CC183A_AEB1_F1D4_41E3_C8DBC03FEACE_1_HS_5_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 1.61,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 12.64,
   "hfov": 18.03
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupMedia(this.window_A1AC67FD_AEF3_A1AA_41E3_DB04D6D73071, this.album_BED3A380_AEF3_E25B_41C8_F7103B3D3318, this.playList_BBB6382A_AEEC_EEAE_41E0_73C2F95ED84A, '90%', '90%', false, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A5CC183A_AEB1_F1D4_41E3_C8DBC03FEACE_1_HS_5_0.png",
      "width": 275,
      "class": "ImageResourceLevel",
      "height": 155
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 12.64,
   "yaw": 1.61,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.03
  }
 ],
 "id": "overlay_BC99D8D6_AEF7_EFE6_41DB_3AE7ACCC7C34",
 "data": {
  "label": "Arrow 01"
 }
},
{
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_A5CC183A_AEB1_F1D4_41E3_C8DBC03FEACE_1_HS_6_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 9.39,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.71,
   "hfov": 18.48
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupMedia(this.window_BFFE2EEF_AEFD_A3A6_41E0_F008DC26A0E1, this.album_BF0DE890_AEFD_EE7B_418A_7985CA64AC68, this.playList_BBB4282A_AEEC_EEAE_41D3_58262914BC8D, '90%', '90%', false, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A5CC183A_AEB1_F1D4_41E3_C8DBC03FEACE_1_HS_6_0.png",
      "width": 275,
      "class": "ImageResourceLevel",
      "height": 155
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.71,
   "yaw": 9.39,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.48
  }
 ],
 "id": "overlay_BF4966D1_AEFC_63FA_41CE_73F4CBFE4BCB",
 "data": {
  "label": "Arrow 01"
 }
},
{
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_A5CC183A_AEB1_F1D4_41E3_C8DBC03FEACE_1_HS_7_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 2.17,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.26,
   "hfov": 18.13
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupMedia(this.window_BFDDCA9E_AEFC_6266_41DB_D87CA0FE1A97, this.album_BCE121E6_AEFF_A1A7_41D4_767447BDFD6C, this.playList_BBB2F82A_AEEC_EEAE_41DC_F1385FEB0467, '90%', '90%', false, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A5CC183A_AEB1_F1D4_41E3_C8DBC03FEACE_1_HS_7_0.png",
      "width": 275,
      "class": "ImageResourceLevel",
      "height": 155
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.26,
   "yaw": 2.17,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.13
  }
 ],
 "id": "overlay_BE2F535A_AEFC_A2EE_41D7_F5CC94126521",
 "data": {
  "label": "Arrow 01"
 }
},
{
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_A5CC183A_AEB1_F1D4_41E3_C8DBC03FEACE_1_HS_8_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -20.53,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.31,
   "hfov": 18.12
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupMedia(this.window_BFE67542_AEF5_A6DE_41DF_F7D611F2D116, this.album_BE20707D_AEF5_9EAA_41D7_A89337166D82, this.playList_BBB0882A_AEEC_EEAE_41B8_73846643C4C4, '90%', '90%', false, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A5CC183A_AEB1_F1D4_41E3_C8DBC03FEACE_1_HS_8_0.png",
      "width": 275,
      "class": "ImageResourceLevel",
      "height": 155
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.31,
   "yaw": -20.53,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.12
  }
 ],
 "id": "overlay_BF10281E_AEFF_AE67_41DF_3F9ED41A2C05",
 "data": {
  "label": "Arrow 01"
 }
},
{
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_A5CC183A_AEB1_F1D4_41E3_C8DBC03FEACE_1_HS_9_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -42.05,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.39,
   "hfov": 18.12
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupMedia(this.window_BF12DE80_AEF4_625A_41D6_175056FCD1F2, this.album_BC054606_AEF4_E266_41E2_4612D1C467A2, this.playList_BBB0C82A_AEEC_EEAE_41D5_35F7E8339A5F, '90%', '90%', false, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A5CC183A_AEB1_F1D4_41E3_C8DBC03FEACE_1_HS_9_0.png",
      "width": 275,
      "class": "ImageResourceLevel",
      "height": 155
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.39,
   "yaw": -42.05,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.12
  }
 ],
 "id": "overlay_BDE588FF_AEF4_AFA5_41E4_1D356A716D29",
 "data": {
  "label": "Arrow 01"
 }
},
{
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_A5CC183A_AEB1_F1D4_41E3_C8DBC03FEACE_1_HS_10_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -62.86,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.47,
   "hfov": 18.11
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupMedia(this.window_BF7FE941_AEF5_EEDA_419E_4DA4E0285EFF, this.album_BCD5AD6C_AEF5_A6AA_41BE_946CB7071D34, this.playList_BBAED82A_AEEC_EEAE_41E2_787CB9347141, '90%', '90%', false, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A5CC183A_AEB1_F1D4_41E3_C8DBC03FEACE_1_HS_10_0.png",
      "width": 275,
      "class": "ImageResourceLevel",
      "height": 155
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.47,
   "yaw": -62.86,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.11
  }
 ],
 "id": "overlay_BC7B8570_AEF4_66BB_41E2_B3008C5B0BF6",
 "data": {
  "label": "Arrow 01"
 }
},
{
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_A5CC183A_AEB1_F1D4_41E3_C8DBC03FEACE_1_HS_11_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -72.96,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.5,
   "hfov": 18.48
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupMedia(this.window_BF4DB805_AEF3_EE5A_41DB_586DBF67BBF1, this.album_BC9A9C53_AEF3_A6FE_41D8_F798402EAFB5, this.playList_BBAC283A_AEEC_EEAE_4151_CFFF967B27EB, '90%', '90%', false, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A5CC183A_AEB1_F1D4_41E3_C8DBC03FEACE_1_HS_11_0.png",
      "width": 276,
      "class": "ImageResourceLevel",
      "height": 155
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.5,
   "yaw": -72.96,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.48
  }
 ],
 "id": "overlay_BC5CEC7C_AEF4_66AA_41E2_13ADF57287B7",
 "data": {
  "label": "Arrow 01"
 }
},
{
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_A5CC183A_AEB1_F1D4_41E3_C8DBC03FEACE_1_HS_12_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -51.93,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.68,
   "hfov": 18.48
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupMedia(this.window_BCD142E6_AEEC_A3A6_41E1_032DCD232E5E, this.album_BF876CE6_AEEC_67A6_41E4_F0A11BCE9BA9, this.playList_BBAD983A_AEEC_EEAE_41E4_FAE7C75E411B, '90%', '90%', false, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A5CC183A_AEB1_F1D4_41E3_C8DBC03FEACE_1_HS_12_0.png",
      "width": 276,
      "class": "ImageResourceLevel",
      "height": 155
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.68,
   "yaw": -51.93,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.48
  }
 ],
 "id": "overlay_BC28C79F_AEEC_A266_41B4_E8AF7BC20253",
 "data": {
  "label": "Arrow 01"
 }
},
{
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_A5CC183A_AEB1_F1D4_41E3_C8DBC03FEACE_1_HS_13_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -62.67,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 12.75,
   "hfov": 18.03
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupMedia(this.window_BCA37F1B_AEEC_E26E_41CE_2E91482B4AD5, this.album_BDC825C0_AEEC_A1DA_41E4_E28DB43D7F44, this.playList_BBABF83A_AEEC_EEAE_41E3_473F03B45DF3, '90%', '90%', false, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A5CC183A_AEB1_F1D4_41E3_C8DBC03FEACE_1_HS_13_0.png",
      "width": 276,
      "class": "ImageResourceLevel",
      "height": 155
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 12.75,
   "yaw": -62.67,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.03
  }
 ],
 "id": "overlay_BF16B4B2_AEEC_67BE_41C6_507AA8E09A26",
 "data": {
  "label": "Arrow 01"
 }
},
{
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_A5CC183A_AEB1_F1D4_41E3_C8DBC03FEACE_1_HS_14_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -40.39,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 12.93,
   "hfov": 18.01
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupMedia(this.window_BCC84682_AEEF_A25E_41E4_7BD29B08AFBB, this.album_BC069925_AEEF_AE5A_41CD_AF5B19FDD624, this.playList_BBA9D83A_AEEC_EEAE_41E4_29415377B4CE, '90%', '90%', false, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A5CC183A_AEB1_F1D4_41E3_C8DBC03FEACE_1_HS_14_0.png",
      "width": 276,
      "class": "ImageResourceLevel",
      "height": 155
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 12.93,
   "yaw": -40.39,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.01
  }
 ],
 "id": "overlay_BC756C86_AEEC_6667_41CC_7407BD27D89C",
 "data": {
  "label": "Arrow 01"
 }
},
{
 "items": [
  {
   "media": "this.album_BC054606_AEF4_E266_41E2_4612D1C467A2_0",
   "camera": {
    "easing": "linear",
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.34",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.39"
    },
    "scaleMode": "fit_outside"
   },
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_BC054606_AEF4_E266_41E2_4612D1C467A2_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "media": "this.album_BED3A380_AEF3_E25B_41C8_F7103B3D3318",
 "class": "PhotoAlbumPlayListItem",
 "begin": "this.updateMediaLabelFromPlayList(this.album_BED3A380_AEF3_E25B_41C8_F7103B3D3318_AlbumPlayList, this.htmltext_BAD37526_AF13_E6A6_41D5_450BDE391D2E, this.albumitem_BAD29526_AF13_E6A6_41E1_0219966D7B79); this.loopAlbum(this.playList_BBB6382A_AEEC_EEAE_41E0_73C2F95ED84A, 0)",
 "player": "this.viewer_uidBAD2B526_AF13_E6A6_41E1_76DAFEE3C37BPhotoAlbumPlayer",
 "id": "albumitem_BAD29526_AF13_E6A6_41E1_0219966D7B79"
},
{
 "items": [
  {
   "media": "this.album_A15985E7_AEF4_61A6_41A0_06BDF6E342D7_0",
   "camera": {
    "easing": "linear",
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.59",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.73"
    },
    "scaleMode": "fit_outside"
   },
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_A15985E7_AEF4_61A6_41A0_06BDF6E342D7_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "children": [
  "this.viewer_uidBADCD536_AF13_E6A6_41B3_44138BE70ACA",
  {
   "children": [
    "this.htmltext_BAE45536_AF13_E6A6_41BA_A1E1DF297F33"
   ],
   "left": 0,
   "paddingRight": 0,
   "class": "Container",
   "right": 0,
   "borderSize": 0,
   "paddingLeft": 0,
   "paddingBottom": 0,
   "backgroundColorDirection": "vertical",
   "minHeight": 20,
   "scrollBarMargin": 2,
   "scrollBarWidth": 7,
   "contentOpaque": true,
   "bottom": 0,
   "backgroundColor": [],
   "verticalAlign": "bottom",
   "minWidth": 20,
   "backgroundOpacity": 0.3,
   "horizontalAlign": "left",
   "gap": 10,
   "overflow": "scroll",
   "layout": "vertical",
   "borderRadius": 0,
   "height": "30%",
   "shadow": false,
   "paddingTop": 0,
   "data": {
    "name": "Container20249"
   },
   "backgroundColorRatios": [],
   "propagateClick": false,
   "scrollBarColor": "#FFFFFF",
   "scrollBarVisible": "rollOver",
   "scrollBarOpacity": 0.5
  },
  "this.component_BAE53536_AF13_E6A6_41B4_F8C59BF34442",
  "this.component_BAE52536_AF13_E6A6_41E4_A8C5A9B4DCA3"
 ],
 "id": "container_BAE41536_AF13_E6A6_419E_98E9DE4F296A",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "minHeight": 20,
 "width": "100%",
 "scrollBarWidth": 10,
 "contentOpaque": false,
 "backgroundColor": [],
 "verticalAlign": "top",
 "minWidth": 20,
 "backgroundOpacity": 0.3,
 "horizontalAlign": "left",
 "gap": 10,
 "overflow": "scroll",
 "layout": "absolute",
 "borderRadius": 0,
 "height": "100%",
 "shadow": false,
 "data": {
  "name": "Container20248"
 },
 "backgroundColorRatios": [],
 "propagateClick": false,
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5
},
{
 "items": [
  {
   "media": "this.album_BCD5AD6C_AEF5_A6AA_41BE_946CB7071D34_0",
   "camera": {
    "easing": "linear",
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.43",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.32"
    },
    "scaleMode": "fit_outside"
   },
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_BCD5AD6C_AEF5_A6AA_41BE_946CB7071D34_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "items": [
  {
   "media": "this.album_BC069925_AEEF_AE5A_41CD_AF5B19FDD624_0",
   "camera": {
    "easing": "linear",
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.33",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.51"
    },
    "scaleMode": "fit_outside"
   },
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_BC069925_AEEF_AE5A_41CD_AF5B19FDD624_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "children": [
  "this.viewer_uidBAD6D526_AF13_E6A6_41D4_EAB0E8E1A68B",
  {
   "children": [
    "this.htmltext_BAD7A526_AF13_E6A6_41B7_9C53373F7607"
   ],
   "left": 0,
   "paddingRight": 0,
   "class": "Container",
   "right": 0,
   "borderSize": 0,
   "paddingLeft": 0,
   "paddingBottom": 0,
   "backgroundColorDirection": "vertical",
   "minHeight": 20,
   "scrollBarMargin": 2,
   "scrollBarWidth": 7,
   "contentOpaque": true,
   "bottom": 0,
   "backgroundColor": [],
   "verticalAlign": "bottom",
   "minWidth": 20,
   "backgroundOpacity": 0.3,
   "horizontalAlign": "left",
   "gap": 10,
   "overflow": "scroll",
   "layout": "vertical",
   "borderRadius": 0,
   "height": "30%",
   "shadow": false,
   "paddingTop": 0,
   "data": {
    "name": "Container20231"
   },
   "backgroundColorRatios": [],
   "propagateClick": false,
   "scrollBarColor": "#FFFFFF",
   "scrollBarVisible": "rollOver",
   "scrollBarOpacity": 0.5
  },
  "this.component_BAD85526_AF13_E6A6_41E1_DB4561F9E517",
  "this.component_BAD8B526_AF13_E6A6_41E5_362703C962A8"
 ],
 "id": "container_BAD77526_AF13_E6A6_417E_5EA59A10E323",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "minHeight": 20,
 "width": "100%",
 "scrollBarWidth": 10,
 "contentOpaque": false,
 "backgroundColor": [],
 "verticalAlign": "top",
 "minWidth": 20,
 "backgroundOpacity": 0.3,
 "horizontalAlign": "left",
 "gap": 10,
 "overflow": "scroll",
 "layout": "absolute",
 "borderRadius": 0,
 "height": "100%",
 "shadow": false,
 "data": {
  "name": "Container20230"
 },
 "backgroundColorRatios": [],
 "propagateClick": false,
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.viewer_uidBAD2B526_AF13_E6A6_41E1_76DAFEE3C37B",
  {
   "children": [
    "this.htmltext_BAD37526_AF13_E6A6_41D5_450BDE391D2E"
   ],
   "left": 0,
   "paddingRight": 0,
   "class": "Container",
   "right": 0,
   "borderSize": 0,
   "paddingLeft": 0,
   "paddingBottom": 0,
   "backgroundColorDirection": "vertical",
   "minHeight": 20,
   "scrollBarMargin": 2,
   "scrollBarWidth": 7,
   "contentOpaque": true,
   "bottom": 0,
   "backgroundColor": [],
   "verticalAlign": "bottom",
   "minWidth": 20,
   "backgroundOpacity": 0.3,
   "horizontalAlign": "left",
   "gap": 10,
   "overflow": "scroll",
   "layout": "vertical",
   "borderRadius": 0,
   "height": "30%",
   "shadow": false,
   "paddingTop": 0,
   "data": {
    "name": "Container20213"
   },
   "backgroundColorRatios": [],
   "propagateClick": false,
   "scrollBarColor": "#FFFFFF",
   "scrollBarVisible": "rollOver",
   "scrollBarOpacity": 0.5
  },
  "this.component_BAD3C526_AF13_E6A6_41E1_B919D5387ABD",
  "this.component_BAD43526_AF13_E6A6_41E0_9D3F403959FA"
 ],
 "id": "container_BAD2D526_AF13_E6A6_41DA_F75655059EEF",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "minHeight": 20,
 "width": "100%",
 "scrollBarWidth": 10,
 "contentOpaque": false,
 "backgroundColor": [],
 "verticalAlign": "top",
 "minWidth": 20,
 "backgroundOpacity": 0.3,
 "horizontalAlign": "left",
 "gap": 10,
 "overflow": "scroll",
 "layout": "absolute",
 "borderRadius": 0,
 "height": "100%",
 "shadow": false,
 "data": {
  "name": "Container20212"
 },
 "backgroundColorRatios": [],
 "propagateClick": false,
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.viewer_uidBAE59536_AF13_E6A6_41E0_E32EB75CF69F",
  {
   "children": [
    "this.htmltext_BAE66536_AF13_E6A6_41DE_C1E037962704"
   ],
   "left": 0,
   "paddingRight": 0,
   "class": "Container",
   "right": 0,
   "borderSize": 0,
   "paddingLeft": 0,
   "paddingBottom": 0,
   "backgroundColorDirection": "vertical",
   "minHeight": 20,
   "scrollBarMargin": 2,
   "scrollBarWidth": 7,
   "contentOpaque": true,
   "bottom": 0,
   "backgroundColor": [],
   "verticalAlign": "bottom",
   "minWidth": 20,
   "backgroundOpacity": 0.3,
   "horizontalAlign": "left",
   "gap": 10,
   "overflow": "scroll",
   "layout": "vertical",
   "borderRadius": 0,
   "height": "30%",
   "shadow": false,
   "paddingTop": 0,
   "data": {
    "name": "Container20255"
   },
   "backgroundColorRatios": [],
   "propagateClick": false,
   "scrollBarColor": "#FFFFFF",
   "scrollBarVisible": "rollOver",
   "scrollBarOpacity": 0.5
  },
  "this.component_BAE71536_AF13_E6A6_41DD_61D8AABECDC7",
  "this.component_BAE70536_AF13_E6A6_41BD_2E5CD1CC5336"
 ],
 "id": "container_BAE5C536_AF13_E6A6_41DE_7E09373885E5",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "minHeight": 20,
 "width": "100%",
 "scrollBarWidth": 10,
 "contentOpaque": false,
 "backgroundColor": [],
 "verticalAlign": "top",
 "minWidth": 20,
 "backgroundOpacity": 0.3,
 "horizontalAlign": "left",
 "gap": 10,
 "overflow": "scroll",
 "layout": "absolute",
 "borderRadius": 0,
 "height": "100%",
 "shadow": false,
 "data": {
  "name": "Container20254"
 },
 "backgroundColorRatios": [],
 "propagateClick": false,
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5
},
{
 "items": [
  {
   "media": "this.album_BF0DE890_AEFD_EE7B_418A_7985CA64AC68_0",
   "camera": {
    "easing": "linear",
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.34",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.58"
    },
    "scaleMode": "fit_outside"
   },
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_BF0DE890_AEFD_EE7B_418A_7985CA64AC68_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "items": [
  {
   "media": "this.album_BED3A380_AEF3_E25B_41C8_F7103B3D3318_0",
   "camera": {
    "easing": "linear",
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.36",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.52"
    },
    "scaleMode": "fit_outside"
   },
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_BED3A380_AEF3_E25B_41C8_F7103B3D3318_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "fontFamily": "Montserrat",
 "id": "Label_0C5F13A8_3BA0_A6FF_41BD_E3D21CFCE151",
 "left": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Label",
 "borderSize": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "textShadowColor": "#000000",
 "text": "LOREM",
 "width": 239,
 "top": 5,
 "textShadowHorizontalLength": 0,
 "textShadowBlurRadius": 10,
 "minWidth": 1,
 "verticalAlign": "top",
 "textShadowVerticalLength": 0,
 "fontSize": 54,
 "backgroundOpacity": 0,
 "horizontalAlign": "left",
 "height": 67,
 "fontStyle": "normal",
 "borderRadius": 0,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "text 1"
 },
 "propagateClick": false,
 "fontWeight": "bold",
 "textShadowOpacity": 1,
 "textDecoration": "none",
 "fontColor": "#FFFFFF"
},
{
 "fontFamily": "Montserrat",
 "id": "Label_0C5F23A8_3BA0_A6FF_419F_468451E37918",
 "left": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Label",
 "borderSize": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "textShadowColor": "#000000",
 "text": "DOLOR SIT AMET",
 "width": 236,
 "top": 66,
 "textShadowHorizontalLength": 0,
 "textShadowBlurRadius": 10,
 "minWidth": 1,
 "verticalAlign": "top",
 "textShadowVerticalLength": 0,
 "fontSize": 18,
 "backgroundOpacity": 0,
 "horizontalAlign": "left",
 "height": 32,
 "fontStyle": "normal",
 "borderRadius": 0,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "text 2"
 },
 "propagateClick": false,
 "fontWeight": "normal",
 "textShadowOpacity": 1,
 "textDecoration": "none",
 "fontColor": "#FFFFFF"
},
{
 "fontFamily": "Montserrat",
 "id": "Label_0E9CEE5D_36F3_E64E_419C_5A94FA5D3CA1",
 "left": 76,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Label",
 "borderSize": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "text": "COMPANY NAME",
 "width": 450,
 "top": "0%",
 "minWidth": 1,
 "verticalAlign": "middle",
 "fontSize": 31,
 "backgroundOpacity": 0,
 "horizontalAlign": "left",
 "height": 60,
 "fontStyle": "normal",
 "borderRadius": 0,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "Label Company Name"
 },
 "propagateClick": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "fontColor": "#FFFFFF"
},
{
 "maxHeight": 30,
 "id": "Image_05314BAF_3AA1_A6F2_41CB_86A11240FA50",
 "left": 30,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Image",
 "borderSize": 0,
 "paddingBottom": 0,
 "url": "skin/Image_05314BAF_3AA1_A6F2_41CB_86A11240FA50.png",
 "minHeight": 1,
 "width": "4.222%",
 "top": "0%",
 "bottom": "0%",
 "minWidth": 1,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "borderRadius": 0,
 "shadow": false,
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "logo"
 },
 "propagateClick": false,
 "maxWidth": 40
},
{
 "children": [
  "this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29",
  "this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312",
  "this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B",
  "this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7",
  "this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09",
  "this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE",
  "this.Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89"
 ],
 "id": "Container_0542AAAA_3AA3_A6F3_41B2_0E208ADBBBE1",
 "paddingRight": 15,
 "class": "Container",
 "right": "0%",
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "scrollBarMargin": 2,
 "width": 1199,
 "scrollBarWidth": 10,
 "contentOpaque": false,
 "top": "0%",
 "minWidth": 1,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "horizontalAlign": "right",
 "gap": 3,
 "overflow": "scroll",
 "height": 60,
 "layout": "horizontal",
 "borderRadius": 0,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "-button set container"
 },
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 101,
 "id": "IconButton_7B212C50_3AA0_A1AF_41C5_F659ED22BD52",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "borderSize": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "width": 44,
 "minWidth": 1,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_7B212C50_3AA0_A1AF_41C5_F659ED22BD52_rollover.png",
 "mode": "push",
 "backgroundOpacity": 0,
 "height": 44,
 "horizontalAlign": "center",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, true, 0, null, null, false)",
 "borderRadius": 0,
 "shadow": false,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_7B212C50_3AA0_A1AF_41C5_F659ED22BD52.png",
 "transparencyActive": true,
 "propagateClick": false,
 "cursor": "hand",
 "maxWidth": 101,
 "data": {
  "name": "IconButton Info"
 }
},
{
 "maxHeight": 101,
 "id": "IconButton_7B21DC51_3AA0_A251_41B1_CEAABC2475F8",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "borderSize": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "width": 44,
 "minWidth": 1,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_7B21DC51_3AA0_A251_41B1_CEAABC2475F8_rollover.png",
 "mode": "push",
 "backgroundOpacity": 0,
 "height": 44,
 "horizontalAlign": "center",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "borderRadius": 0,
 "shadow": false,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_7B21DC51_3AA0_A251_41B1_CEAABC2475F8.png",
 "transparencyActive": true,
 "propagateClick": false,
 "cursor": "hand",
 "maxWidth": 101,
 "data": {
  "name": "IconButton Thumblist"
 }
},
{
 "maxHeight": 101,
 "id": "IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "borderSize": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "width": 44,
 "minWidth": 1,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0_rollover.png",
 "mode": "push",
 "backgroundOpacity": 0,
 "height": 44,
 "horizontalAlign": "center",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, true, 0, null, null, false)",
 "borderRadius": 0,
 "shadow": false,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0.png",
 "transparencyActive": true,
 "propagateClick": false,
 "cursor": "hand",
 "maxWidth": 101,
 "data": {
  "name": "IconButton Location"
 }
},
{
 "maxHeight": 101,
 "id": "IconButton_7B21FC51_3AA0_A251_41CC_46CDE74591EA",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "borderSize": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "width": 44,
 "minWidth": 1,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_7B21FC51_3AA0_A251_41CC_46CDE74591EA_rollover.png",
 "mode": "push",
 "backgroundOpacity": 0,
 "height": 44,
 "horizontalAlign": "center",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false)",
 "borderRadius": 0,
 "shadow": false,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_7B21FC51_3AA0_A251_41CC_46CDE74591EA.png",
 "transparencyActive": true,
 "propagateClick": false,
 "cursor": "hand",
 "maxWidth": 101,
 "data": {
  "name": "IconButton Photoalbum"
 }
},
{
 "maxHeight": 101,
 "id": "IconButton_7B206C51_3AA0_A251_41A3_B3DB657BC52B",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "borderSize": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "width": 44,
 "minWidth": 1,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_7B206C51_3AA0_A251_41A3_B3DB657BC52B_rollover.png",
 "mode": "push",
 "backgroundOpacity": 0,
 "height": 44,
 "horizontalAlign": "center",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "borderRadius": 0,
 "shadow": false,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_7B206C51_3AA0_A251_41A3_B3DB657BC52B.png",
 "transparencyActive": true,
 "propagateClick": false,
 "cursor": "hand",
 "maxWidth": 101,
 "data": {
  "name": "IconButton Floorplan"
 }
},
{
 "maxHeight": 101,
 "id": "IconButton_7B201C51_3AA0_A251_41CD_5CC0A59F2DE8",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "borderSize": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "width": 44,
 "minWidth": 1,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_7B201C51_3AA0_A251_41CD_5CC0A59F2DE8_rollover.png",
 "mode": "push",
 "backgroundOpacity": 0,
 "height": 44,
 "horizontalAlign": "center",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, true, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_7B201C51_3AA0_A251_41CD_5CC0A59F2DE8_pressed.png",
 "borderRadius": 0,
 "shadow": false,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_7B201C51_3AA0_A251_41CD_5CC0A59F2DE8.png",
 "transparencyActive": true,
 "propagateClick": false,
 "cursor": "hand",
 "maxWidth": 101,
 "data": {
  "name": "IconButton Realtor"
 }
},
{
 "maxHeight": 101,
 "id": "IconButton_7B200C51_3AA0_A251_41CC_7E57609B3C93",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "borderSize": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "width": 44,
 "minWidth": 1,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_7B200C51_3AA0_A251_41CC_7E57609B3C93_rollover.png",
 "mode": "push",
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "height": 44,
 "transparencyActive": true,
 "borderRadius": 0,
 "shadow": false,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_7B200C51_3AA0_A251_41CC_7E57609B3C93.png",
 "data": {
  "name": "IconButton Video"
 },
 "propagateClick": false,
 "cursor": "hand",
 "maxWidth": 101
},
{
 "shadowVerticalLength": 0,
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_26D3A42C_3F86_BA30_419B_2C6BE84D2718",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "15%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Container",
 "right": "15%",
 "borderSize": 0,
 "paddingBottom": 0,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "top": "10%",
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "bottom": "10%",
 "shadowHorizontalLength": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "backgroundOpacity": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "horizontalAlign": "left",
 "gap": 0,
 "overflow": "scroll",
 "shadowOpacity": 0.3,
 "layout": "horizontal",
 "borderRadius": 0,
 "shadow": true,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "15%",
 "paddingLeft": 0,
 "paddingRight": 20,
 "class": "Container",
 "right": "15%",
 "borderSize": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "contentOpaque": false,
 "top": "10%",
 "bottom": "80%",
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundOpacity": 0,
 "horizontalAlign": "right",
 "gap": 10,
 "overflow": "visible",
 "layout": "vertical",
 "borderRadius": 0,
 "scrollBarColor": "#000000",
 "shadow": false,
 "paddingTop": 20,
 "data": {
  "name": "Container X global"
 },
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarOpacity": 0.5
},
{
 "shadowVerticalLength": 0,
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Container",
 "right": "15%",
 "borderSize": 0,
 "paddingBottom": 0,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "top": "10%",
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "bottom": "10%",
 "shadowHorizontalLength": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "backgroundOpacity": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "horizontalAlign": "center",
 "gap": 10,
 "overflow": "visible",
 "shadowOpacity": 0.3,
 "layout": "absolute",
 "borderRadius": 0,
 "shadow": true,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5
},
{
 "shadowVerticalLength": 0,
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "15%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Container",
 "right": "15%",
 "borderSize": 0,
 "paddingBottom": 0,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "top": "10%",
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "bottom": "10%",
 "shadowHorizontalLength": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "backgroundOpacity": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "horizontalAlign": "left",
 "gap": 10,
 "overflow": "scroll",
 "shadowOpacity": 0.3,
 "layout": "horizontal",
 "borderRadius": 0,
 "shadow": true,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "15%",
 "paddingLeft": 0,
 "paddingRight": 20,
 "class": "Container",
 "right": "15%",
 "borderSize": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "contentOpaque": false,
 "top": "10%",
 "bottom": "80%",
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundOpacity": 0,
 "horizontalAlign": "right",
 "gap": 10,
 "overflow": "visible",
 "layout": "vertical",
 "borderRadius": 0,
 "scrollBarColor": "#000000",
 "shadow": false,
 "paddingTop": 20,
 "data": {
  "name": "Container X global"
 },
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarOpacity": 0.5
},
{
 "shadowVerticalLength": 0,
 "children": [
  "this.MapViewer",
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C"
 ],
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Container",
 "right": "15%",
 "borderSize": 0,
 "paddingBottom": 0,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "top": "10%",
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "bottom": "10%",
 "shadowHorizontalLength": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "backgroundOpacity": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "horizontalAlign": "center",
 "gap": 10,
 "overflow": "visible",
 "shadowOpacity": 0.3,
 "layout": "absolute",
 "borderRadius": 0,
 "shadow": true,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5
},
{
 "shadowVerticalLength": 0,
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Container",
 "right": "15%",
 "borderSize": 0,
 "paddingBottom": 0,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "top": "10%",
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "bottom": "10%",
 "shadowHorizontalLength": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "backgroundOpacity": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "horizontalAlign": "center",
 "gap": 10,
 "overflow": "visible",
 "shadowOpacity": 0.3,
 "layout": "vertical",
 "borderRadius": 0,
 "shadow": true,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5
},
{
 "shadowVerticalLength": 0,
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_27875147_3F82_7A70_41CC_C0FFBB32BEFD",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "left": "15%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Container",
 "right": "15%",
 "borderSize": 0,
 "paddingBottom": 0,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "top": "10%",
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "bottom": "10%",
 "shadowHorizontalLength": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "backgroundOpacity": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "horizontalAlign": "left",
 "gap": 0,
 "overflow": "scroll",
 "shadowOpacity": 0.3,
 "layout": "horizontal",
 "borderRadius": 0,
 "shadow": true,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "left": "15%",
 "paddingLeft": 0,
 "paddingRight": 20,
 "class": "Container",
 "right": "15%",
 "borderSize": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "contentOpaque": false,
 "top": "10%",
 "bottom": "80%",
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundOpacity": 0,
 "horizontalAlign": "right",
 "gap": 10,
 "overflow": "visible",
 "layout": "vertical",
 "borderRadius": 0,
 "scrollBarColor": "#000000",
 "shadow": false,
 "paddingTop": 20,
 "data": {
  "name": "Container X global"
 },
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarOpacity": 0.5
},
{
 "viewerArea": "this.viewer_uidBAD6A526_AF13_E6A6_41DB_DFA8F23E4BCA",
 "id": "viewer_uidBAD6A526_AF13_E6A6_41DB_DFA8F23E4BCAPhotoAlbumPlayer",
 "buttonPrevious": "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "class": "PhotoAlbumPlayer",
 "buttonNext": "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510"
},
{
 "viewerArea": "this.viewer_uidBADCD536_AF13_E6A6_41B3_44138BE70ACA",
 "id": "viewer_uidBADCD536_AF13_E6A6_41B3_44138BE70ACAPhotoAlbumPlayer",
 "buttonPrevious": "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "class": "PhotoAlbumPlayer",
 "buttonNext": "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510"
},
{
 "viewerArea": "this.viewer_uidBAD8C526_AF13_E6A6_41B6_92D9DE6754DE",
 "id": "viewer_uidBAD8C526_AF13_E6A6_41B6_92D9DE6754DEPhotoAlbumPlayer",
 "buttonPrevious": "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "class": "PhotoAlbumPlayer",
 "buttonNext": "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510"
},
{
 "playbackBarBottom": 0,
 "toolTipBorderColor": "#767676",
 "id": "viewer_uidBAE98536_AF13_E6A6_41DC_A053992ACAE2",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "playbackBarHeadOpacity": 1,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "class": "ViewerArea",
 "toolTipShadowBlurRadius": 3,
 "toolTipOpacity": 1,
 "paddingBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "width": "100%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "minHeight": 50,
 "toolTipPaddingBottom": 4,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "transitionDuration": 500,
 "toolTipShadowColor": "#333333",
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "progressBarBorderSize": 0,
 "minWidth": 100,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarProgressBorderColor": "#000000",
 "shadow": false,
 "toolTipFontFamily": "Arial",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "propagateClick": false,
 "progressLeft": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipTextShadowOpacity": 0,
 "playbackBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "displayTooltipInTouchScreens": true,
 "paddingRight": 0,
 "borderSize": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "toolTipFontColor": "#606060",
 "progressBarBackgroundColorDirection": "vertical",
 "transitionMode": "blending",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressRight": 0,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "firstTransitionDuration": 0,
 "progressBottom": 2,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "playbackBarLeft": 0,
 "paddingTop": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "data": {
  "name": "ViewerArea20265"
 },
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF"
},
{
 "id": "htmltext_BAEAB536_AF13_E6A6_41A9_DCB6DE960340",
 "paddingLeft": 10,
 "paddingRight": 10,
 "class": "HTMLText",
 "borderSize": 0,
 "paddingBottom": 5,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "minHeight": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeInEffect"
 },
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeOutEffect"
 },
 "minWidth": 0,
 "backgroundOpacity": 0.7,
 "backgroundColor": [
  "#000000"
 ],
 "borderRadius": 0,
 "html": "",
 "shadow": false,
 "data": {
  "name": "HTMLText20268"
 },
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "paddingTop": 5,
 "visible": false,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5
},
{
 "id": "component_BAEB2536_AF13_E6A6_41A9_A35182525562",
 "left": 10,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "borderSize": 0,
 "paddingBottom": 0,
 "minHeight": 0,
 "top": "45%",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeInEffect"
 },
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeOutEffect"
 },
 "minWidth": 0,
 "verticalAlign": "middle",
 "mode": "push",
 "backgroundOpacity": 0,
 "iconURL": "skin/album_left.png",
 "horizontalAlign": "center",
 "click": "this.loadFromCurrentMediaPlayList(this.album_BC069925_AEEF_AE5A_41CD_AF5B19FDD624_AlbumPlayList, -1)",
 "borderRadius": 0,
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": false,
 "propagateClick": false,
 "visible": false,
 "cursor": "hand",
 "data": {
  "name": "IconButton20269"
 }
},
{
 "id": "component_BAEB1536_AF13_E6A6_41E4_CB51D56747B0",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "right": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "minHeight": 0,
 "top": "45%",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeInEffect"
 },
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeOutEffect"
 },
 "minWidth": 0,
 "verticalAlign": "middle",
 "mode": "push",
 "backgroundOpacity": 0,
 "iconURL": "skin/album_right.png",
 "horizontalAlign": "center",
 "click": "this.loadFromCurrentMediaPlayList(this.album_BC069925_AEEF_AE5A_41CD_AF5B19FDD624_AlbumPlayList, 1)",
 "borderRadius": 0,
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": false,
 "propagateClick": false,
 "visible": false,
 "cursor": "hand",
 "data": {
  "name": "IconButton20270"
 }
},
{
 "playbackBarBottom": 0,
 "toolTipBorderColor": "#767676",
 "id": "viewer_uidBADAC536_AF13_E6A6_41D9_45B98B350A57",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "playbackBarHeadOpacity": 1,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "class": "ViewerArea",
 "toolTipShadowBlurRadius": 3,
 "toolTipOpacity": 1,
 "paddingBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "width": "100%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "minHeight": 50,
 "toolTipPaddingBottom": 4,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "transitionDuration": 500,
 "toolTipShadowColor": "#333333",
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "progressBarBorderSize": 0,
 "minWidth": 100,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarProgressBorderColor": "#000000",
 "shadow": false,
 "toolTipFontFamily": "Arial",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "propagateClick": false,
 "progressLeft": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipTextShadowOpacity": 0,
 "playbackBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "displayTooltipInTouchScreens": true,
 "paddingRight": 0,
 "borderSize": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "toolTipFontColor": "#606060",
 "progressBarBackgroundColorDirection": "vertical",
 "transitionMode": "blending",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressRight": 0,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "firstTransitionDuration": 0,
 "progressBottom": 2,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "playbackBarLeft": 0,
 "paddingTop": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "data": {
  "name": "ViewerArea20241"
 },
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF"
},
{
 "id": "htmltext_BADB9536_AF13_E6A6_41D3_D25DED52E319",
 "paddingLeft": 10,
 "paddingRight": 10,
 "class": "HTMLText",
 "borderSize": 0,
 "paddingBottom": 5,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "minHeight": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeInEffect"
 },
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeOutEffect"
 },
 "minWidth": 0,
 "backgroundOpacity": 0.7,
 "backgroundColor": [
  "#000000"
 ],
 "borderRadius": 0,
 "html": "",
 "shadow": false,
 "data": {
  "name": "HTMLText20244"
 },
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "paddingTop": 5,
 "visible": false,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5
},
{
 "id": "component_BADC6536_AF13_E6A6_41A3_2AE8DBF01255",
 "left": 10,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "borderSize": 0,
 "paddingBottom": 0,
 "minHeight": 0,
 "top": "45%",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeInEffect"
 },
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeOutEffect"
 },
 "minWidth": 0,
 "verticalAlign": "middle",
 "mode": "push",
 "backgroundOpacity": 0,
 "iconURL": "skin/album_left.png",
 "horizontalAlign": "center",
 "click": "this.loadFromCurrentMediaPlayList(this.album_BCD5AD6C_AEF5_A6AA_41BE_946CB7071D34_AlbumPlayList, -1)",
 "borderRadius": 0,
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": false,
 "propagateClick": false,
 "visible": false,
 "cursor": "hand",
 "data": {
  "name": "IconButton20245"
 }
},
{
 "id": "component_BADC4536_AF13_E6A6_41E2_327C65C61CBB",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "right": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "minHeight": 0,
 "top": "45%",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeInEffect"
 },
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeOutEffect"
 },
 "minWidth": 0,
 "verticalAlign": "middle",
 "mode": "push",
 "backgroundOpacity": 0,
 "iconURL": "skin/album_right.png",
 "horizontalAlign": "center",
 "click": "this.loadFromCurrentMediaPlayList(this.album_BCD5AD6C_AEF5_A6AA_41BE_946CB7071D34_AlbumPlayList, 1)",
 "borderRadius": 0,
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": false,
 "propagateClick": false,
 "visible": false,
 "cursor": "hand",
 "data": {
  "name": "IconButton20246"
 }
},
{
 "playbackBarBottom": 0,
 "toolTipBorderColor": "#767676",
 "id": "viewer_uidBAD09526_AF13_E6A6_41D1_C6FD3B2C4498",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "playbackBarHeadOpacity": 1,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "class": "ViewerArea",
 "toolTipShadowBlurRadius": 3,
 "toolTipOpacity": 1,
 "paddingBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "width": "100%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "minHeight": 50,
 "toolTipPaddingBottom": 4,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "transitionDuration": 500,
 "toolTipShadowColor": "#333333",
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "progressBarBorderSize": 0,
 "minWidth": 100,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarProgressBorderColor": "#000000",
 "shadow": false,
 "toolTipFontFamily": "Arial",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "propagateClick": false,
 "progressLeft": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipTextShadowOpacity": 0,
 "playbackBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "displayTooltipInTouchScreens": true,
 "paddingRight": 0,
 "borderSize": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "toolTipFontColor": "#606060",
 "progressBarBackgroundColorDirection": "vertical",
 "transitionMode": "blending",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressRight": 0,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "firstTransitionDuration": 0,
 "progressBottom": 2,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "playbackBarLeft": 0,
 "paddingTop": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "data": {
  "name": "ViewerArea20205"
 },
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF"
},
{
 "id": "htmltext_BAD16526_AF13_E6A6_41CB_4F0A2D4FD5B6",
 "paddingLeft": 10,
 "paddingRight": 10,
 "class": "HTMLText",
 "borderSize": 0,
 "paddingBottom": 5,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "minHeight": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeInEffect"
 },
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeOutEffect"
 },
 "minWidth": 0,
 "backgroundOpacity": 0.7,
 "backgroundColor": [
  "#000000"
 ],
 "borderRadius": 0,
 "html": "",
 "shadow": false,
 "data": {
  "name": "HTMLText20208"
 },
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "paddingTop": 5,
 "visible": false,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5
},
{
 "id": "component_BAD1D526_AF13_E6A6_41D3_DBDBCCC7E949",
 "left": 10,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "borderSize": 0,
 "paddingBottom": 0,
 "minHeight": 0,
 "top": "45%",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeInEffect"
 },
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeOutEffect"
 },
 "minWidth": 0,
 "verticalAlign": "middle",
 "mode": "push",
 "backgroundOpacity": 0,
 "iconURL": "skin/album_left.png",
 "horizontalAlign": "center",
 "click": "this.loadFromCurrentMediaPlayList(this.album_A15985E7_AEF4_61A6_41A0_06BDF6E342D7_AlbumPlayList, -1)",
 "borderRadius": 0,
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": false,
 "propagateClick": false,
 "visible": false,
 "cursor": "hand",
 "data": {
  "name": "IconButton20209"
 }
},
{
 "id": "component_BAD1C526_AF13_E6A6_41DA_6DA447220A46",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "right": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "minHeight": 0,
 "top": "45%",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeInEffect"
 },
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeOutEffect"
 },
 "minWidth": 0,
 "verticalAlign": "middle",
 "mode": "push",
 "backgroundOpacity": 0,
 "iconURL": "skin/album_right.png",
 "horizontalAlign": "center",
 "click": "this.loadFromCurrentMediaPlayList(this.album_A15985E7_AEF4_61A6_41A0_06BDF6E342D7_AlbumPlayList, 1)",
 "borderRadius": 0,
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": false,
 "propagateClick": false,
 "visible": false,
 "cursor": "hand",
 "data": {
  "name": "IconButton20210"
 }
},
{
 "viewerArea": "this.viewer_uidBAE7F536_AF13_E6A6_41AC_669F5BCAA113",
 "id": "viewer_uidBAE7F536_AF13_E6A6_41AC_669F5BCAA113PhotoAlbumPlayer",
 "buttonPrevious": "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "class": "PhotoAlbumPlayer",
 "buttonNext": "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510"
},
{
 "viewerArea": "this.viewer_uidBAE98536_AF13_E6A6_41DC_A053992ACAE2",
 "id": "viewer_uidBAE98536_AF13_E6A6_41DC_A053992ACAE2PhotoAlbumPlayer",
 "buttonPrevious": "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "class": "PhotoAlbumPlayer",
 "buttonNext": "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510"
},
{
 "playbackBarBottom": 0,
 "toolTipBorderColor": "#767676",
 "id": "viewer_uidBAD8C526_AF13_E6A6_41B6_92D9DE6754DE",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "playbackBarHeadOpacity": 1,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "class": "ViewerArea",
 "toolTipShadowBlurRadius": 3,
 "toolTipOpacity": 1,
 "paddingBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "width": "100%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "minHeight": 50,
 "toolTipPaddingBottom": 4,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "transitionDuration": 500,
 "toolTipShadowColor": "#333333",
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "progressBarBorderSize": 0,
 "minWidth": 100,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarProgressBorderColor": "#000000",
 "shadow": false,
 "toolTipFontFamily": "Arial",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "propagateClick": false,
 "progressLeft": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipTextShadowOpacity": 0,
 "playbackBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "displayTooltipInTouchScreens": true,
 "paddingRight": 0,
 "borderSize": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "toolTipFontColor": "#606060",
 "progressBarBackgroundColorDirection": "vertical",
 "transitionMode": "blending",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressRight": 0,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "firstTransitionDuration": 0,
 "progressBottom": 2,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "playbackBarLeft": 0,
 "paddingTop": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "data": {
  "name": "ViewerArea20235"
 },
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF"
},
{
 "id": "htmltext_BAD9E536_AF13_E6A6_41E5_D9F4646D6909",
 "paddingLeft": 10,
 "paddingRight": 10,
 "class": "HTMLText",
 "borderSize": 0,
 "paddingBottom": 5,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "minHeight": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeInEffect"
 },
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeOutEffect"
 },
 "minWidth": 0,
 "backgroundOpacity": 0.7,
 "backgroundColor": [
  "#000000"
 ],
 "borderRadius": 0,
 "html": "",
 "shadow": false,
 "data": {
  "name": "HTMLText20238"
 },
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "paddingTop": 5,
 "visible": false,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5
},
{
 "id": "component_BADA5536_AF13_E6A6_41E0_E7BA09632F10",
 "left": 10,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "borderSize": 0,
 "paddingBottom": 0,
 "minHeight": 0,
 "top": "45%",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeInEffect"
 },
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeOutEffect"
 },
 "minWidth": 0,
 "verticalAlign": "middle",
 "mode": "push",
 "backgroundOpacity": 0,
 "iconURL": "skin/album_left.png",
 "horizontalAlign": "center",
 "click": "this.loadFromCurrentMediaPlayList(this.album_BC054606_AEF4_E266_41E2_4612D1C467A2_AlbumPlayList, -1)",
 "borderRadius": 0,
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": false,
 "propagateClick": false,
 "visible": false,
 "cursor": "hand",
 "data": {
  "name": "IconButton20239"
 }
},
{
 "id": "component_BADA4536_AF13_E6A6_41DB_59BE0F819A05",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "right": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "minHeight": 0,
 "top": "45%",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeInEffect"
 },
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeOutEffect"
 },
 "minWidth": 0,
 "verticalAlign": "middle",
 "mode": "push",
 "backgroundOpacity": 0,
 "iconURL": "skin/album_right.png",
 "horizontalAlign": "center",
 "click": "this.loadFromCurrentMediaPlayList(this.album_BC054606_AEF4_E266_41E2_4612D1C467A2_AlbumPlayList, 1)",
 "borderRadius": 0,
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": false,
 "propagateClick": false,
 "visible": false,
 "cursor": "hand",
 "data": {
  "name": "IconButton20240"
 }
},
{
 "viewerArea": "this.viewer_uidBAE59536_AF13_E6A6_41E0_E32EB75CF69F",
 "id": "viewer_uidBAE59536_AF13_E6A6_41E0_E32EB75CF69FPhotoAlbumPlayer",
 "buttonPrevious": "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "class": "PhotoAlbumPlayer",
 "buttonNext": "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510"
},
{
 "viewerArea": "this.viewer_uidBACE8526_AF13_E6A6_41C9_1D09FF994932",
 "id": "viewer_uidBACE8526_AF13_E6A6_41C9_1D09FF994932PhotoAlbumPlayer",
 "buttonPrevious": "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "class": "PhotoAlbumPlayer",
 "buttonNext": "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510"
},
{
 "viewerArea": "this.viewer_uidBADAC536_AF13_E6A6_41D9_45B98B350A57",
 "id": "viewer_uidBADAC536_AF13_E6A6_41D9_45B98B350A57PhotoAlbumPlayer",
 "buttonPrevious": "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "class": "PhotoAlbumPlayer",
 "buttonNext": "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510"
},
{
 "playbackBarBottom": 0,
 "toolTipBorderColor": "#767676",
 "id": "viewer_uidBAE7F536_AF13_E6A6_41AC_669F5BCAA113",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "playbackBarHeadOpacity": 1,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "class": "ViewerArea",
 "toolTipShadowBlurRadius": 3,
 "toolTipOpacity": 1,
 "paddingBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "width": "100%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "minHeight": 50,
 "toolTipPaddingBottom": 4,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "transitionDuration": 500,
 "toolTipShadowColor": "#333333",
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "progressBarBorderSize": 0,
 "minWidth": 100,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarProgressBorderColor": "#000000",
 "shadow": false,
 "toolTipFontFamily": "Arial",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "propagateClick": false,
 "progressLeft": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipTextShadowOpacity": 0,
 "playbackBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "displayTooltipInTouchScreens": true,
 "paddingRight": 0,
 "borderSize": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "toolTipFontColor": "#606060",
 "progressBarBackgroundColorDirection": "vertical",
 "transitionMode": "blending",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressRight": 0,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "firstTransitionDuration": 0,
 "progressBottom": 2,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "playbackBarLeft": 0,
 "paddingTop": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "data": {
  "name": "ViewerArea20259"
 },
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF"
},
{
 "id": "htmltext_BAE8B536_AF13_E6A6_41E2_B6C3B8B8E1A5",
 "paddingLeft": 10,
 "paddingRight": 10,
 "class": "HTMLText",
 "borderSize": 0,
 "paddingBottom": 5,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "minHeight": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeInEffect"
 },
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeOutEffect"
 },
 "minWidth": 0,
 "backgroundOpacity": 0.7,
 "backgroundColor": [
  "#000000"
 ],
 "borderRadius": 0,
 "html": "",
 "shadow": false,
 "data": {
  "name": "HTMLText20262"
 },
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "paddingTop": 5,
 "visible": false,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5
},
{
 "id": "component_BAE91536_AF13_E6A6_41C7_8469CF09CC58",
 "left": 10,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "borderSize": 0,
 "paddingBottom": 0,
 "minHeight": 0,
 "top": "45%",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeInEffect"
 },
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeOutEffect"
 },
 "minWidth": 0,
 "verticalAlign": "middle",
 "mode": "push",
 "backgroundOpacity": 0,
 "iconURL": "skin/album_left.png",
 "horizontalAlign": "center",
 "click": "this.loadFromCurrentMediaPlayList(this.album_BDC825C0_AEEC_A1DA_41E4_E28DB43D7F44_AlbumPlayList, -1)",
 "borderRadius": 0,
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": false,
 "propagateClick": false,
 "visible": false,
 "cursor": "hand",
 "data": {
  "name": "IconButton20263"
 }
},
{
 "id": "component_BAE97536_AF13_E6A6_41D1_5EBBA2369620",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "right": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "minHeight": 0,
 "top": "45%",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeInEffect"
 },
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeOutEffect"
 },
 "minWidth": 0,
 "verticalAlign": "middle",
 "mode": "push",
 "backgroundOpacity": 0,
 "iconURL": "skin/album_right.png",
 "horizontalAlign": "center",
 "click": "this.loadFromCurrentMediaPlayList(this.album_BDC825C0_AEEC_A1DA_41E4_E28DB43D7F44_AlbumPlayList, 1)",
 "borderRadius": 0,
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": false,
 "propagateClick": false,
 "visible": false,
 "cursor": "hand",
 "data": {
  "name": "IconButton20264"
 }
},
{
 "viewerArea": "this.viewer_uidBAD09526_AF13_E6A6_41D1_C6FD3B2C4498",
 "id": "viewer_uidBAD09526_AF13_E6A6_41D1_C6FD3B2C4498PhotoAlbumPlayer",
 "buttonPrevious": "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "class": "PhotoAlbumPlayer",
 "buttonNext": "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510"
},
{
 "playbackBarBottom": 0,
 "toolTipBorderColor": "#767676",
 "id": "viewer_uidBAD6A526_AF13_E6A6_41DB_DFA8F23E4BCA",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "playbackBarHeadOpacity": 1,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "class": "ViewerArea",
 "toolTipShadowBlurRadius": 3,
 "toolTipOpacity": 1,
 "paddingBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "width": "100%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "minHeight": 50,
 "toolTipPaddingBottom": 4,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "transitionDuration": 500,
 "toolTipShadowColor": "#333333",
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "progressBarBorderSize": 0,
 "minWidth": 100,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarProgressBorderColor": "#000000",
 "shadow": false,
 "toolTipFontFamily": "Arial",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "propagateClick": false,
 "progressLeft": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipTextShadowOpacity": 0,
 "playbackBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "displayTooltipInTouchScreens": true,
 "paddingRight": 0,
 "borderSize": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "toolTipFontColor": "#606060",
 "progressBarBackgroundColorDirection": "vertical",
 "transitionMode": "blending",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressRight": 0,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "firstTransitionDuration": 0,
 "progressBottom": 2,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "playbackBarLeft": 0,
 "paddingTop": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "data": {
  "name": "ViewerArea20223"
 },
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF"
},
{
 "id": "htmltext_BAD58526_AF13_E6A6_41DA_B19FD4E41172",
 "paddingLeft": 10,
 "paddingRight": 10,
 "class": "HTMLText",
 "borderSize": 0,
 "paddingBottom": 5,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "minHeight": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeInEffect"
 },
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeOutEffect"
 },
 "minWidth": 0,
 "backgroundOpacity": 0.7,
 "backgroundColor": [
  "#000000"
 ],
 "borderRadius": 0,
 "html": "",
 "shadow": false,
 "data": {
  "name": "HTMLText20226"
 },
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "paddingTop": 5,
 "visible": false,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5
},
{
 "id": "component_BAD66526_AF13_E6A6_41CA_A10E2046D86D",
 "left": 10,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "borderSize": 0,
 "paddingBottom": 0,
 "minHeight": 0,
 "top": "45%",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeInEffect"
 },
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeOutEffect"
 },
 "minWidth": 0,
 "verticalAlign": "middle",
 "mode": "push",
 "backgroundOpacity": 0,
 "iconURL": "skin/album_left.png",
 "horizontalAlign": "center",
 "click": "this.loadFromCurrentMediaPlayList(this.album_BCE121E6_AEFF_A1A7_41D4_767447BDFD6C_AlbumPlayList, -1)",
 "borderRadius": 0,
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": false,
 "propagateClick": false,
 "visible": false,
 "cursor": "hand",
 "data": {
  "name": "IconButton20227"
 }
},
{
 "id": "component_BAD65526_AF13_E6A6_41DA_90F2E26A19C4",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "right": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "minHeight": 0,
 "top": "45%",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeInEffect"
 },
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeOutEffect"
 },
 "minWidth": 0,
 "verticalAlign": "middle",
 "mode": "push",
 "backgroundOpacity": 0,
 "iconURL": "skin/album_right.png",
 "horizontalAlign": "center",
 "click": "this.loadFromCurrentMediaPlayList(this.album_BCE121E6_AEFF_A1A7_41D4_767447BDFD6C_AlbumPlayList, 1)",
 "borderRadius": 0,
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": false,
 "propagateClick": false,
 "visible": false,
 "cursor": "hand",
 "data": {
  "name": "IconButton20228"
 }
},
{
 "playbackBarBottom": 0,
 "toolTipBorderColor": "#767676",
 "id": "viewer_uidBACE8526_AF13_E6A6_41C9_1D09FF994932",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "playbackBarHeadOpacity": 1,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "class": "ViewerArea",
 "toolTipShadowBlurRadius": 3,
 "toolTipOpacity": 1,
 "paddingBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "width": "100%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "minHeight": 50,
 "toolTipPaddingBottom": 4,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "transitionDuration": 500,
 "toolTipShadowColor": "#333333",
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "progressBarBorderSize": 0,
 "minWidth": 100,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarProgressBorderColor": "#000000",
 "shadow": false,
 "toolTipFontFamily": "Arial",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "propagateClick": false,
 "progressLeft": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipTextShadowOpacity": 0,
 "playbackBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "displayTooltipInTouchScreens": true,
 "paddingRight": 0,
 "borderSize": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "toolTipFontColor": "#606060",
 "progressBarBackgroundColorDirection": "vertical",
 "transitionMode": "blending",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressRight": 0,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "firstTransitionDuration": 0,
 "progressBottom": 2,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "playbackBarLeft": 0,
 "paddingTop": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "data": {
  "name": "ViewerArea20199"
 },
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF"
},
{
 "id": "htmltext_BACF5526_AF13_E6A6_41D6_71D2214A4A4F",
 "paddingLeft": 10,
 "paddingRight": 10,
 "class": "HTMLText",
 "borderSize": 0,
 "paddingBottom": 5,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "minHeight": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeInEffect"
 },
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeOutEffect"
 },
 "minWidth": 0,
 "backgroundOpacity": 0.7,
 "backgroundColor": [
  "#000000"
 ],
 "borderRadius": 0,
 "html": "",
 "shadow": false,
 "data": {
  "name": "HTMLText20202"
 },
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "paddingTop": 5,
 "visible": false,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5
},
{
 "id": "component_BAD02526_AF13_E6A6_41D1_1BF5F3369CCF",
 "left": 10,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "borderSize": 0,
 "paddingBottom": 0,
 "minHeight": 0,
 "top": "45%",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeInEffect"
 },
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeOutEffect"
 },
 "minWidth": 0,
 "verticalAlign": "middle",
 "mode": "push",
 "backgroundOpacity": 0,
 "iconURL": "skin/album_left.png",
 "horizontalAlign": "center",
 "click": "this.loadFromCurrentMediaPlayList(this.album_A16FDC01_AEEC_665A_41D2_05CD2E62EB33_AlbumPlayList, -1)",
 "borderRadius": 0,
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": false,
 "propagateClick": false,
 "visible": false,
 "cursor": "hand",
 "data": {
  "name": "IconButton20203"
 }
},
{
 "id": "component_BAD01526_AF13_E6A6_41E4_228DD34C5A64",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "right": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "minHeight": 0,
 "top": "45%",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeInEffect"
 },
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeOutEffect"
 },
 "minWidth": 0,
 "verticalAlign": "middle",
 "mode": "push",
 "backgroundOpacity": 0,
 "iconURL": "skin/album_right.png",
 "horizontalAlign": "center",
 "click": "this.loadFromCurrentMediaPlayList(this.album_A16FDC01_AEEC_665A_41D2_05CD2E62EB33_AlbumPlayList, 1)",
 "borderRadius": 0,
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": false,
 "propagateClick": false,
 "visible": false,
 "cursor": "hand",
 "data": {
  "name": "IconButton20204"
 }
},
{
 "viewerArea": "this.viewer_uidBAD4B526_AF13_E6A6_41C7_DA560EFFB6A7",
 "id": "viewer_uidBAD4B526_AF13_E6A6_41C7_DA560EFFB6A7PhotoAlbumPlayer",
 "buttonPrevious": "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "class": "PhotoAlbumPlayer",
 "buttonNext": "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510"
},
{
 "viewerArea": "this.viewer_uidBAD6D526_AF13_E6A6_41D4_EAB0E8E1A68B",
 "id": "viewer_uidBAD6D526_AF13_E6A6_41D4_EAB0E8E1A68BPhotoAlbumPlayer",
 "buttonPrevious": "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "class": "PhotoAlbumPlayer",
 "buttonNext": "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510"
},
{
 "playbackBarBottom": 0,
 "toolTipBorderColor": "#767676",
 "id": "viewer_uidBAD4B526_AF13_E6A6_41C7_DA560EFFB6A7",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "playbackBarHeadOpacity": 1,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "class": "ViewerArea",
 "toolTipShadowBlurRadius": 3,
 "toolTipOpacity": 1,
 "paddingBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "width": "100%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "minHeight": 50,
 "toolTipPaddingBottom": 4,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "transitionDuration": 500,
 "toolTipShadowColor": "#333333",
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "progressBarBorderSize": 0,
 "minWidth": 100,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarProgressBorderColor": "#000000",
 "shadow": false,
 "toolTipFontFamily": "Arial",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "propagateClick": false,
 "progressLeft": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipTextShadowOpacity": 0,
 "playbackBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "displayTooltipInTouchScreens": true,
 "paddingRight": 0,
 "borderSize": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "toolTipFontColor": "#606060",
 "progressBarBackgroundColorDirection": "vertical",
 "transitionMode": "blending",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressRight": 0,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "firstTransitionDuration": 0,
 "progressBottom": 2,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "playbackBarLeft": 0,
 "paddingTop": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "data": {
  "name": "ViewerArea20217"
 },
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF"
},
{
 "id": "htmltext_BAD56526_AF13_E6A6_4171_9D43BE5B420B",
 "paddingLeft": 10,
 "paddingRight": 10,
 "class": "HTMLText",
 "borderSize": 0,
 "paddingBottom": 5,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "minHeight": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeInEffect"
 },
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeOutEffect"
 },
 "minWidth": 0,
 "backgroundOpacity": 0.7,
 "backgroundColor": [
  "#000000"
 ],
 "borderRadius": 0,
 "html": "",
 "shadow": false,
 "data": {
  "name": "HTMLText20220"
 },
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "paddingTop": 5,
 "visible": false,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5
},
{
 "id": "component_BAD63526_AF13_E6A6_41DD_F579E9050E47",
 "left": 10,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "borderSize": 0,
 "paddingBottom": 0,
 "minHeight": 0,
 "top": "45%",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeInEffect"
 },
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeOutEffect"
 },
 "minWidth": 0,
 "verticalAlign": "middle",
 "mode": "push",
 "backgroundOpacity": 0,
 "iconURL": "skin/album_left.png",
 "horizontalAlign": "center",
 "click": "this.loadFromCurrentMediaPlayList(this.album_BF0DE890_AEFD_EE7B_418A_7985CA64AC68_AlbumPlayList, -1)",
 "borderRadius": 0,
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": false,
 "propagateClick": false,
 "visible": false,
 "cursor": "hand",
 "data": {
  "name": "IconButton20221"
 }
},
{
 "id": "component_BAD62526_AF13_E6A6_41C0_C22FF0396284",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "right": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "minHeight": 0,
 "top": "45%",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeInEffect"
 },
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeOutEffect"
 },
 "minWidth": 0,
 "verticalAlign": "middle",
 "mode": "push",
 "backgroundOpacity": 0,
 "iconURL": "skin/album_right.png",
 "horizontalAlign": "center",
 "click": "this.loadFromCurrentMediaPlayList(this.album_BF0DE890_AEFD_EE7B_418A_7985CA64AC68_AlbumPlayList, 1)",
 "borderRadius": 0,
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": false,
 "propagateClick": false,
 "visible": false,
 "cursor": "hand",
 "data": {
  "name": "IconButton20222"
 }
},
{
 "viewerArea": "this.viewer_uidBAD2B526_AF13_E6A6_41E1_76DAFEE3C37B",
 "id": "viewer_uidBAD2B526_AF13_E6A6_41E1_76DAFEE3C37BPhotoAlbumPlayer",
 "buttonPrevious": "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "class": "PhotoAlbumPlayer",
 "buttonNext": "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510"
},
{
 "playbackBarBottom": 0,
 "toolTipBorderColor": "#767676",
 "id": "viewer_uidBADCD536_AF13_E6A6_41B3_44138BE70ACA",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "playbackBarHeadOpacity": 1,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "class": "ViewerArea",
 "toolTipShadowBlurRadius": 3,
 "toolTipOpacity": 1,
 "paddingBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "width": "100%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "minHeight": 50,
 "toolTipPaddingBottom": 4,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "transitionDuration": 500,
 "toolTipShadowColor": "#333333",
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "progressBarBorderSize": 0,
 "minWidth": 100,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarProgressBorderColor": "#000000",
 "shadow": false,
 "toolTipFontFamily": "Arial",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "propagateClick": false,
 "progressLeft": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipTextShadowOpacity": 0,
 "playbackBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "displayTooltipInTouchScreens": true,
 "paddingRight": 0,
 "borderSize": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "toolTipFontColor": "#606060",
 "progressBarBackgroundColorDirection": "vertical",
 "transitionMode": "blending",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressRight": 0,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "firstTransitionDuration": 0,
 "progressBottom": 2,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "playbackBarLeft": 0,
 "paddingTop": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "data": {
  "name": "ViewerArea20247"
 },
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF"
},
{
 "id": "htmltext_BAE45536_AF13_E6A6_41BA_A1E1DF297F33",
 "paddingLeft": 10,
 "paddingRight": 10,
 "class": "HTMLText",
 "borderSize": 0,
 "paddingBottom": 5,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "minHeight": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeInEffect"
 },
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeOutEffect"
 },
 "minWidth": 0,
 "backgroundOpacity": 0.7,
 "backgroundColor": [
  "#000000"
 ],
 "borderRadius": 0,
 "html": "",
 "shadow": false,
 "data": {
  "name": "HTMLText20250"
 },
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "paddingTop": 5,
 "visible": false,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5
},
{
 "id": "component_BAE53536_AF13_E6A6_41B4_F8C59BF34442",
 "left": 10,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "borderSize": 0,
 "paddingBottom": 0,
 "minHeight": 0,
 "top": "45%",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeInEffect"
 },
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeOutEffect"
 },
 "minWidth": 0,
 "verticalAlign": "middle",
 "mode": "push",
 "backgroundOpacity": 0,
 "iconURL": "skin/album_left.png",
 "horizontalAlign": "center",
 "click": "this.loadFromCurrentMediaPlayList(this.album_BC9A9C53_AEF3_A6FE_41D8_F798402EAFB5_AlbumPlayList, -1)",
 "borderRadius": 0,
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": false,
 "propagateClick": false,
 "visible": false,
 "cursor": "hand",
 "data": {
  "name": "IconButton20251"
 }
},
{
 "id": "component_BAE52536_AF13_E6A6_41E4_A8C5A9B4DCA3",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "right": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "minHeight": 0,
 "top": "45%",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeInEffect"
 },
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeOutEffect"
 },
 "minWidth": 0,
 "verticalAlign": "middle",
 "mode": "push",
 "backgroundOpacity": 0,
 "iconURL": "skin/album_right.png",
 "horizontalAlign": "center",
 "click": "this.loadFromCurrentMediaPlayList(this.album_BC9A9C53_AEF3_A6FE_41D8_F798402EAFB5_AlbumPlayList, 1)",
 "borderRadius": 0,
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": false,
 "propagateClick": false,
 "visible": false,
 "cursor": "hand",
 "data": {
  "name": "IconButton20252"
 }
},
{
 "playbackBarBottom": 0,
 "toolTipBorderColor": "#767676",
 "id": "viewer_uidBAD6D526_AF13_E6A6_41D4_EAB0E8E1A68B",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "playbackBarHeadOpacity": 1,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "class": "ViewerArea",
 "toolTipShadowBlurRadius": 3,
 "toolTipOpacity": 1,
 "paddingBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "width": "100%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "minHeight": 50,
 "toolTipPaddingBottom": 4,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "transitionDuration": 500,
 "toolTipShadowColor": "#333333",
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "progressBarBorderSize": 0,
 "minWidth": 100,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarProgressBorderColor": "#000000",
 "shadow": false,
 "toolTipFontFamily": "Arial",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "propagateClick": false,
 "progressLeft": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipTextShadowOpacity": 0,
 "playbackBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "displayTooltipInTouchScreens": true,
 "paddingRight": 0,
 "borderSize": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "toolTipFontColor": "#606060",
 "progressBarBackgroundColorDirection": "vertical",
 "transitionMode": "blending",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressRight": 0,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "firstTransitionDuration": 0,
 "progressBottom": 2,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "playbackBarLeft": 0,
 "paddingTop": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "data": {
  "name": "ViewerArea20229"
 },
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF"
},
{
 "id": "htmltext_BAD7A526_AF13_E6A6_41B7_9C53373F7607",
 "paddingLeft": 10,
 "paddingRight": 10,
 "class": "HTMLText",
 "borderSize": 0,
 "paddingBottom": 5,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "minHeight": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeInEffect"
 },
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeOutEffect"
 },
 "minWidth": 0,
 "backgroundOpacity": 0.7,
 "backgroundColor": [
  "#000000"
 ],
 "borderRadius": 0,
 "html": "",
 "shadow": false,
 "data": {
  "name": "HTMLText20232"
 },
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "paddingTop": 5,
 "visible": false,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5
},
{
 "id": "component_BAD85526_AF13_E6A6_41E1_DB4561F9E517",
 "left": 10,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "borderSize": 0,
 "paddingBottom": 0,
 "minHeight": 0,
 "top": "45%",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeInEffect"
 },
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeOutEffect"
 },
 "minWidth": 0,
 "verticalAlign": "middle",
 "mode": "push",
 "backgroundOpacity": 0,
 "iconURL": "skin/album_left.png",
 "horizontalAlign": "center",
 "click": "this.loadFromCurrentMediaPlayList(this.album_BE20707D_AEF5_9EAA_41D7_A89337166D82_AlbumPlayList, -1)",
 "borderRadius": 0,
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": false,
 "propagateClick": false,
 "visible": false,
 "cursor": "hand",
 "data": {
  "name": "IconButton20233"
 }
},
{
 "id": "component_BAD8B526_AF13_E6A6_41E5_362703C962A8",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "right": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "minHeight": 0,
 "top": "45%",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeInEffect"
 },
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeOutEffect"
 },
 "minWidth": 0,
 "verticalAlign": "middle",
 "mode": "push",
 "backgroundOpacity": 0,
 "iconURL": "skin/album_right.png",
 "horizontalAlign": "center",
 "click": "this.loadFromCurrentMediaPlayList(this.album_BE20707D_AEF5_9EAA_41D7_A89337166D82_AlbumPlayList, 1)",
 "borderRadius": 0,
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": false,
 "propagateClick": false,
 "visible": false,
 "cursor": "hand",
 "data": {
  "name": "IconButton20234"
 }
},
{
 "playbackBarBottom": 0,
 "toolTipBorderColor": "#767676",
 "id": "viewer_uidBAD2B526_AF13_E6A6_41E1_76DAFEE3C37B",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "playbackBarHeadOpacity": 1,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "class": "ViewerArea",
 "toolTipShadowBlurRadius": 3,
 "toolTipOpacity": 1,
 "paddingBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "width": "100%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "minHeight": 50,
 "toolTipPaddingBottom": 4,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "transitionDuration": 500,
 "toolTipShadowColor": "#333333",
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "progressBarBorderSize": 0,
 "minWidth": 100,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarProgressBorderColor": "#000000",
 "shadow": false,
 "toolTipFontFamily": "Arial",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "propagateClick": false,
 "progressLeft": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipTextShadowOpacity": 0,
 "playbackBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "displayTooltipInTouchScreens": true,
 "paddingRight": 0,
 "borderSize": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "toolTipFontColor": "#606060",
 "progressBarBackgroundColorDirection": "vertical",
 "transitionMode": "blending",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressRight": 0,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "firstTransitionDuration": 0,
 "progressBottom": 2,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "playbackBarLeft": 0,
 "paddingTop": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "data": {
  "name": "ViewerArea20211"
 },
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF"
},
{
 "id": "htmltext_BAD37526_AF13_E6A6_41D5_450BDE391D2E",
 "paddingLeft": 10,
 "paddingRight": 10,
 "class": "HTMLText",
 "borderSize": 0,
 "paddingBottom": 5,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "minHeight": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeInEffect"
 },
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeOutEffect"
 },
 "minWidth": 0,
 "backgroundOpacity": 0.7,
 "backgroundColor": [
  "#000000"
 ],
 "borderRadius": 0,
 "html": "",
 "shadow": false,
 "data": {
  "name": "HTMLText20214"
 },
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "paddingTop": 5,
 "visible": false,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5
},
{
 "id": "component_BAD3C526_AF13_E6A6_41E1_B919D5387ABD",
 "left": 10,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "borderSize": 0,
 "paddingBottom": 0,
 "minHeight": 0,
 "top": "45%",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeInEffect"
 },
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeOutEffect"
 },
 "minWidth": 0,
 "verticalAlign": "middle",
 "mode": "push",
 "backgroundOpacity": 0,
 "iconURL": "skin/album_left.png",
 "horizontalAlign": "center",
 "click": "this.loadFromCurrentMediaPlayList(this.album_BED3A380_AEF3_E25B_41C8_F7103B3D3318_AlbumPlayList, -1)",
 "borderRadius": 0,
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": false,
 "propagateClick": false,
 "visible": false,
 "cursor": "hand",
 "data": {
  "name": "IconButton20215"
 }
},
{
 "id": "component_BAD43526_AF13_E6A6_41E0_9D3F403959FA",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "right": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "minHeight": 0,
 "top": "45%",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeInEffect"
 },
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeOutEffect"
 },
 "minWidth": 0,
 "verticalAlign": "middle",
 "mode": "push",
 "backgroundOpacity": 0,
 "iconURL": "skin/album_right.png",
 "horizontalAlign": "center",
 "click": "this.loadFromCurrentMediaPlayList(this.album_BED3A380_AEF3_E25B_41C8_F7103B3D3318_AlbumPlayList, 1)",
 "borderRadius": 0,
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": false,
 "propagateClick": false,
 "visible": false,
 "cursor": "hand",
 "data": {
  "name": "IconButton20216"
 }
},
{
 "playbackBarBottom": 0,
 "toolTipBorderColor": "#767676",
 "id": "viewer_uidBAE59536_AF13_E6A6_41E0_E32EB75CF69F",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "playbackBarHeadOpacity": 1,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "class": "ViewerArea",
 "toolTipShadowBlurRadius": 3,
 "toolTipOpacity": 1,
 "paddingBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "width": "100%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "minHeight": 50,
 "toolTipPaddingBottom": 4,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "transitionDuration": 500,
 "toolTipShadowColor": "#333333",
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "progressBarBorderSize": 0,
 "minWidth": 100,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarProgressBorderColor": "#000000",
 "shadow": false,
 "toolTipFontFamily": "Arial",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "propagateClick": false,
 "progressLeft": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipTextShadowOpacity": 0,
 "playbackBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "displayTooltipInTouchScreens": true,
 "paddingRight": 0,
 "borderSize": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "toolTipFontColor": "#606060",
 "progressBarBackgroundColorDirection": "vertical",
 "transitionMode": "blending",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressRight": 0,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "firstTransitionDuration": 0,
 "progressBottom": 2,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "playbackBarLeft": 0,
 "paddingTop": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "data": {
  "name": "ViewerArea20253"
 },
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF"
},
{
 "id": "htmltext_BAE66536_AF13_E6A6_41DE_C1E037962704",
 "paddingLeft": 10,
 "paddingRight": 10,
 "class": "HTMLText",
 "borderSize": 0,
 "paddingBottom": 5,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "minHeight": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeInEffect"
 },
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeOutEffect"
 },
 "minWidth": 0,
 "backgroundOpacity": 0.7,
 "backgroundColor": [
  "#000000"
 ],
 "borderRadius": 0,
 "html": "",
 "shadow": false,
 "data": {
  "name": "HTMLText20256"
 },
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "paddingTop": 5,
 "visible": false,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5
},
{
 "id": "component_BAE71536_AF13_E6A6_41DD_61D8AABECDC7",
 "left": 10,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "borderSize": 0,
 "paddingBottom": 0,
 "minHeight": 0,
 "top": "45%",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeInEffect"
 },
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeOutEffect"
 },
 "minWidth": 0,
 "verticalAlign": "middle",
 "mode": "push",
 "backgroundOpacity": 0,
 "iconURL": "skin/album_left.png",
 "horizontalAlign": "center",
 "click": "this.loadFromCurrentMediaPlayList(this.album_BF876CE6_AEEC_67A6_41E4_F0A11BCE9BA9_AlbumPlayList, -1)",
 "borderRadius": 0,
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": false,
 "propagateClick": false,
 "visible": false,
 "cursor": "hand",
 "data": {
  "name": "IconButton20257"
 }
},
{
 "id": "component_BAE70536_AF13_E6A6_41BD_2E5CD1CC5336",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "right": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "minHeight": 0,
 "top": "45%",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeInEffect"
 },
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeOutEffect"
 },
 "minWidth": 0,
 "verticalAlign": "middle",
 "mode": "push",
 "backgroundOpacity": 0,
 "iconURL": "skin/album_right.png",
 "horizontalAlign": "center",
 "click": "this.loadFromCurrentMediaPlayList(this.album_BF876CE6_AEEC_67A6_41E4_F0A11BCE9BA9_AlbumPlayList, 1)",
 "borderRadius": 0,
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": false,
 "propagateClick": false,
 "visible": false,
 "cursor": "hand",
 "data": {
  "name": "IconButton20258"
 }
},
{
 "fontFamily": "Montserrat",
 "id": "DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29",
 "popUpShadowOpacity": 0,
 "paddingLeft": 15,
 "popUpBorderRadius": 0,
 "paddingRight": 15,
 "popUpShadowSpread": 1,
 "class": "DropDown",
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "popUpPaddingTop": 10,
 "minHeight": 1,
 "popUpShadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "width": 116,
 "arrowBeforeLabel": false,
 "rollOverPopUpBackgroundColor": "#CE6700",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "selectedPopUpBackgroundColor": "#CE6700",
 "popUpPaddingBottom": 10,
 "pressedBackgroundColor": [
  "#CE6700"
 ],
 "playList": "this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist",
 "popUpBackgroundColor": "#F7931E",
 "height": 60,
 "fontSize": 12,
 "backgroundOpacity": 1,
 "minWidth": 1,
 "label": "RECEPTION",
 "popUpBackgroundOpacity": 1,
 "gap": 0,
 "popUpGap": 2,
 "backgroundColor": [
  "#F7931E"
 ],
 "popUpShadow": false,
 "fontStyle": "normal",
 "borderRadius": 0,
 "shadow": false,
 "pressedBackgroundColorRatios": [
  0
 ],
 "data": {
  "name": "DropDown 1"
 },
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "paddingTop": 0,
 "fontWeight": "bold",
 "popUpShadowBlurRadius": 6,
 "textDecoration": "none",
 "popUpFontColor": "#FFFFFF",
 "fontColor": "#FFFFFF",
 "arrowColor": "#FFFFFF",
 "popUpPaddingLeft": 15
},
{
 "fontFamily": "Montserrat",
 "id": "DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312",
 "popUpShadowOpacity": 0,
 "paddingLeft": 15,
 "popUpBorderRadius": 5,
 "paddingRight": 15,
 "popUpShadowSpread": 1,
 "class": "DropDown",
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "popUpPaddingTop": 10,
 "minHeight": 1,
 "popUpShadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "width": 96,
 "arrowBeforeLabel": false,
 "rollOverPopUpBackgroundColor": "#CE6700",
 "selectedPopUpBackgroundColor": "#CE6700",
 "popUpPaddingBottom": 10,
 "pressedBackgroundColor": [
  "#CE6700"
 ],
 "playList": "this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist",
 "popUpBackgroundColor": "#F7931E",
 "minWidth": 1,
 "fontSize": 12,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundOpacity": 1,
 "label": "ROOMS",
 "popUpBackgroundOpacity": 1,
 "gap": 0,
 "popUpGap": 2,
 "backgroundColor": [
  "#F7931E"
 ],
 "popUpShadow": false,
 "fontStyle": "normal",
 "borderRadius": 0,
 "height": "100%",
 "shadow": false,
 "pressedBackgroundColorRatios": [
  0
 ],
 "data": {
  "name": "DropDown 2"
 },
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "paddingTop": 0,
 "fontWeight": "bold",
 "popUpShadowBlurRadius": 6,
 "textDecoration": "none",
 "popUpFontColor": "#FFFFFF",
 "fontColor": "#FFFFFF",
 "arrowColor": "#FFFFFF",
 "popUpPaddingLeft": 15
},
{
 "fontFamily": "Montserrat",
 "id": "DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B",
 "popUpShadowOpacity": 0,
 "paddingLeft": 15,
 "popUpBorderRadius": 0,
 "paddingRight": 15,
 "popUpShadowSpread": 1,
 "class": "DropDown",
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "popUpPaddingTop": 10,
 "minHeight": 1,
 "popUpShadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "width": 114,
 "arrowBeforeLabel": false,
 "rollOverPopUpBackgroundColor": "#CE6700",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "selectedPopUpBackgroundColor": "#CE6700",
 "popUpPaddingBottom": 10,
 "pressedBackgroundColor": [
  "#CE6700"
 ],
 "playList": "this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist",
 "popUpBackgroundColor": "#F7931E",
 "height": 60,
 "fontSize": 12,
 "backgroundOpacity": 1,
 "minWidth": 1,
 "label": "AMENITIES",
 "popUpBackgroundOpacity": 1,
 "gap": 0,
 "popUpGap": 2,
 "backgroundColor": [
  "#F7931E"
 ],
 "popUpShadow": false,
 "fontStyle": "normal",
 "borderRadius": 0,
 "shadow": false,
 "pressedBackgroundColorRatios": [
  0
 ],
 "data": {
  "name": "DropDown 3"
 },
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "paddingTop": 0,
 "fontWeight": "bold",
 "popUpShadowBlurRadius": 6,
 "textDecoration": "none",
 "popUpFontColor": "#FFFFFF",
 "fontColor": "#FFFFFF",
 "arrowColor": "#FFFFFF",
 "popUpPaddingLeft": 15
},
{
 "fontFamily": "Montserrat",
 "id": "DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7",
 "popUpShadowOpacity": 0,
 "paddingLeft": 15,
 "popUpBorderRadius": 0,
 "paddingRight": 15,
 "popUpShadowSpread": 1,
 "class": "DropDown",
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "popUpPaddingTop": 10,
 "minHeight": 1,
 "popUpShadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "width": 130,
 "arrowBeforeLabel": false,
 "rollOverPopUpBackgroundColor": "#CE6700",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "selectedPopUpBackgroundColor": "#CE6700",
 "popUpPaddingBottom": 10,
 "pressedBackgroundColor": [
  "#CE6700"
 ],
 "playList": "this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist",
 "popUpBackgroundColor": "#F7931E",
 "height": 60,
 "fontSize": 12,
 "backgroundOpacity": 1,
 "minWidth": 1,
 "label": "SPORTS AREA",
 "popUpBackgroundOpacity": 1,
 "gap": 0,
 "popUpGap": 2,
 "backgroundColor": [
  "#F7931E"
 ],
 "popUpShadow": false,
 "fontStyle": "normal",
 "borderRadius": 0,
 "shadow": false,
 "pressedBackgroundColorRatios": [
  0
 ],
 "data": {
  "name": "DropDown 4"
 },
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "paddingTop": 0,
 "fontWeight": "bold",
 "popUpShadowBlurRadius": 6,
 "textDecoration": "none",
 "popUpFontColor": "#FFFFFF",
 "fontColor": "#FFFFFF",
 "arrowColor": "#FFFFFF",
 "popUpPaddingLeft": 15
},
{
 "fontFamily": "Montserrat",
 "id": "DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09",
 "popUpShadowOpacity": 0,
 "paddingLeft": 15,
 "popUpBorderRadius": 0,
 "paddingRight": 15,
 "popUpShadowSpread": 1,
 "class": "DropDown",
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "popUpPaddingTop": 10,
 "minHeight": 1,
 "popUpShadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "width": 152,
 "arrowBeforeLabel": false,
 "rollOverPopUpBackgroundColor": "#CE6700",
 "rollOverBackgroundColorRatios": [
  0.01
 ],
 "selectedPopUpBackgroundColor": "#CE6700",
 "popUpPaddingBottom": 10,
 "pressedBackgroundColor": [
  "#CE6700"
 ],
 "playList": "this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist",
 "popUpBackgroundColor": "#F7931E",
 "height": 60,
 "fontSize": 12,
 "backgroundOpacity": 1,
 "minWidth": 1,
 "label": "SWIMMING POOL",
 "popUpBackgroundOpacity": 1,
 "gap": 0,
 "popUpGap": 2,
 "backgroundColor": [
  "#F7931E"
 ],
 "popUpShadow": false,
 "fontStyle": "normal",
 "borderRadius": 0,
 "shadow": false,
 "pressedBackgroundColorRatios": [
  0
 ],
 "data": {
  "name": "DropDown 5"
 },
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "paddingTop": 0,
 "fontWeight": "bold",
 "popUpShadowBlurRadius": 6,
 "textDecoration": "none",
 "popUpFontColor": "#FFFFFF",
 "fontColor": "#FFFFFF",
 "arrowColor": "#FFFFFF",
 "popUpPaddingLeft": 15
},
{
 "fontFamily": "Montserrat",
 "id": "DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE",
 "popUpShadowOpacity": 0,
 "paddingLeft": 15,
 "popUpBorderRadius": 0,
 "paddingRight": 15,
 "popUpShadowSpread": 1,
 "class": "DropDown",
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "popUpPaddingTop": 10,
 "minHeight": 1,
 "popUpShadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "width": 136,
 "arrowBeforeLabel": false,
 "rollOverPopUpBackgroundColor": "#CE6700",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "selectedPopUpBackgroundColor": "#CE6700",
 "popUpPaddingBottom": 10,
 "pressedBackgroundColor": [
  "#CE6700"
 ],
 "playList": "this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist",
 "popUpBackgroundColor": "#F7931E",
 "height": 60,
 "fontSize": 12,
 "backgroundOpacity": 1,
 "minWidth": 1,
 "label": "RESTAURANTS",
 "popUpBackgroundOpacity": 1,
 "gap": 0,
 "popUpGap": 2,
 "backgroundColor": [
  "#F7931E"
 ],
 "popUpShadow": false,
 "fontStyle": "normal",
 "borderRadius": 0,
 "shadow": false,
 "pressedBackgroundColorRatios": [
  0
 ],
 "data": {
  "name": "DropDown 6"
 },
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "paddingTop": 0,
 "fontWeight": "bold",
 "popUpShadowBlurRadius": 6,
 "textDecoration": "none",
 "popUpFontColor": "#FFFFFF",
 "fontColor": "#FFFFFF",
 "arrowColor": "#FFFFFF",
 "popUpPaddingLeft": 15
},
{
 "fontFamily": "Arial",
 "fontColor": "#FFFFFF",
 "click": "if(!this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4.get('visible')){ this.setComponentVisibility(this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4, false, 0, null, null, false) }",
 "id": "Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89",
 "rollOverBackgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Button",
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "iconHeight": 17,
 "minHeight": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "width": 60,
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "height": 60,
 "fontSize": 12,
 "mode": "toggle",
 "backgroundOpacity": 1,
 "minWidth": 1,
 "gap": 5,
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#F7931E"
 ],
 "horizontalAlign": "center",
 "fontStyle": "normal",
 "pressedIconURL": "skin/Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89_pressed.png",
 "borderRadius": 0,
 "layout": "horizontal",
 "shadow": false,
 "data": {
  "name": "Button Settings"
 },
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "paddingTop": 0,
 "iconURL": "skin/Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89.png",
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "iconWidth": 17
},
{
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "minHeight": 1,
 "width": "85%",
 "scrollBarWidth": 10,
 "contentOpaque": false,
 "backgroundColor": [
  "#000000"
 ],
 "verticalAlign": "middle",
 "minWidth": 1,
 "backgroundOpacity": 1,
 "horizontalAlign": "center",
 "gap": 10,
 "overflow": "scroll",
 "layout": "absolute",
 "borderRadius": 0,
 "height": "100%",
 "shadow": false,
 "data": {
  "name": "-left"
 },
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5
},
{
 "id": "Container_26D3A42C_3F86_BA30_419B_2C6BE84D2718",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "minHeight": 1,
 "width": 8,
 "scrollBarWidth": 10,
 "contentOpaque": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "backgroundOpacity": 1,
 "horizontalAlign": "left",
 "gap": 10,
 "overflow": "scroll",
 "backgroundColor": [
  "#F7931E"
 ],
 "layout": "absolute",
 "borderRadius": 0,
 "height": "100%",
 "shadow": false,
 "data": {
  "name": "orange line"
 },
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "paddingLeft": 50,
 "paddingRight": 50,
 "class": "Container",
 "borderSize": 0,
 "paddingBottom": 20,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "minHeight": 1,
 "width": "50%",
 "scrollBarWidth": 10,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 460,
 "backgroundOpacity": 1,
 "horizontalAlign": "left",
 "gap": 0,
 "overflow": "visible",
 "layout": "vertical",
 "borderRadius": 0,
 "height": "100%",
 "shadow": false,
 "data": {
  "name": "-right"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "paddingTop": 20,
 "scrollBarColor": "#0069A3",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.51
},
{
 "maxHeight": 60,
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "borderSize": 0,
 "paddingBottom": 0,
 "minHeight": 50,
 "width": "25%",
 "minWidth": 50,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "mode": "push",
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "horizontalAlign": "center",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "borderRadius": 0,
 "height": "75%",
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": false,
 "propagateClick": false,
 "cursor": "hand",
 "maxWidth": 60,
 "data": {
  "name": "X"
 }
},
{
 "children": [
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "minHeight": 1,
 "width": "100%",
 "scrollBarWidth": 10,
 "contentOpaque": false,
 "height": 140,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "horizontalAlign": "left",
 "gap": 10,
 "overflow": "scroll",
 "layout": "absolute",
 "borderRadius": 0,
 "shadow": false,
 "data": {
  "name": "header"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5
},
{
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "left": 0,
 "paddingLeft": 70,
 "rollOverItemThumbnailShadowColor": "#F7931E",
 "class": "ThumbnailGrid",
 "paddingBottom": 70,
 "itemLabelFontFamily": "Montserrat",
 "minHeight": 1,
 "itemBorderRadius": 0,
 "width": "100%",
 "itemHorizontalAlign": "center",
 "selectedItemThumbnailShadowBlurRadius": 16,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemThumbnailBorderRadius": 0,
 "itemPaddingLeft": 3,
 "minWidth": 1,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "itemLabelPosition": "bottom",
 "height": "92%",
 "verticalAlign": "middle",
 "itemWidth": 220,
 "backgroundOpacity": 0,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemPaddingTop": 3,
 "horizontalAlign": "center",
 "itemBackgroundColor": [],
 "itemMinHeight": 50,
 "itemBackgroundOpacity": 0,
 "shadow": false,
 "itemBackgroundColorRatios": [],
 "propagateClick": false,
 "itemVerticalAlign": "top",
 "itemThumbnailOpacity": 1,
 "selectedItemThumbnailShadow": true,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "rollOverItemLabelFontColor": "#F7931E",
 "itemThumbnailHeight": 125,
 "paddingRight": 70,
 "scrollBarMargin": 2,
 "borderSize": 0,
 "itemMinWidth": 50,
 "rollOverItemThumbnailShadow": true,
 "itemLabelTextDecoration": "none",
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontSize": 13,
 "scrollBarWidth": 10,
 "itemLabelFontWeight": "normal",
 "selectedItemLabelFontColor": "#F7931E",
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemOpacity": 1,
 "itemPaddingRight": 3,
 "bottom": -0.2,
 "itemThumbnailWidth": 220,
 "itemLabelFontColor": "#666666",
 "itemBackgroundColorDirection": "vertical",
 "itemHeight": 160,
 "gap": 26,
 "itemThumbnailShadow": false,
 "itemPaddingBottom": 3,
 "scrollBarColor": "#F7931E",
 "borderRadius": 5,
 "paddingTop": 10,
 "itemLabelFontStyle": "normal",
 "scrollBarVisible": "rollOver",
 "selectedItemLabelFontWeight": "bold",
 "scrollBarOpacity": 0.5,
 "itemLabelHorizontalAlign": "center",
 "data": {
  "name": "ThumbnailList"
 },
 "itemMaxWidth": 1000,
 "itemMode": "normal",
 "itemMaxHeight": 1000,
 "itemLabelGap": 7
},
{
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "insetBorder": false,
 "paddingLeft": 0,
 "scrollEnabled": true,
 "paddingRight": 0,
 "class": "WebFrame",
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>",
 "minHeight": 1,
 "width": "100%",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "height": "100%",
 "shadow": false,
 "data": {
  "name": "WebFrame48191"
 },
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "paddingTop": 0
},
{
 "maxHeight": 60,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "borderSize": 0,
 "paddingBottom": 0,
 "minHeight": 50,
 "width": "25%",
 "minWidth": 50,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "mode": "push",
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "horizontalAlign": "center",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "borderRadius": 0,
 "height": "75%",
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": false,
 "propagateClick": false,
 "cursor": "hand",
 "maxWidth": 60,
 "data": {
  "name": "X"
 }
},
{
 "children": [
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingBottom": 0,
 "scrollBarMargin": 2,
 "minHeight": 1,
 "width": "100%",
 "scrollBarWidth": 10,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundOpacity": 0,
 "horizontalAlign": "left",
 "gap": 10,
 "overflow": "scroll",
 "height": 140,
 "layout": "absolute",
 "borderRadius": 0,
 "scrollBarColor": "#000000",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "header"
 },
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "minHeight": 1,
 "width": "100%",
 "scrollBarWidth": 10,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "backgroundOpacity": 0.3,
 "horizontalAlign": "left",
 "gap": 10,
 "overflow": "visible",
 "layout": "absolute",
 "borderRadius": 0,
 "height": "100%",
 "shadow": false,
 "data": {
  "name": "Container photo"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397"
 ],
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "minHeight": 1,
 "width": "55%",
 "scrollBarWidth": 10,
 "contentOpaque": false,
 "backgroundColor": [
  "#000000"
 ],
 "verticalAlign": "middle",
 "minWidth": 1,
 "backgroundOpacity": 1,
 "horizontalAlign": "center",
 "gap": 10,
 "overflow": "scroll",
 "layout": "absolute",
 "borderRadius": 0,
 "height": "100%",
 "shadow": false,
 "data": {
  "name": "-left"
 },
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5
},
{
 "id": "Container_27875147_3F82_7A70_41CC_C0FFBB32BEFD",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "minHeight": 1,
 "width": 8,
 "scrollBarWidth": 10,
 "contentOpaque": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "backgroundOpacity": 1,
 "horizontalAlign": "left",
 "gap": 10,
 "overflow": "scroll",
 "backgroundColor": [
  "#F7931E"
 ],
 "layout": "absolute",
 "borderRadius": 0,
 "height": "100%",
 "shadow": false,
 "data": {
  "name": "orange line"
 },
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "paddingLeft": 60,
 "paddingRight": 60,
 "class": "Container",
 "borderSize": 0,
 "paddingBottom": 20,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "minHeight": 1,
 "width": "45%",
 "scrollBarWidth": 10,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 460,
 "backgroundOpacity": 1,
 "horizontalAlign": "left",
 "gap": 0,
 "overflow": "visible",
 "layout": "vertical",
 "borderRadius": 0,
 "height": "100%",
 "shadow": false,
 "data": {
  "name": "-right"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "paddingTop": 20,
 "scrollBarColor": "#0069A3",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.51
},
{
 "maxHeight": 60,
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "borderSize": 0,
 "paddingBottom": 0,
 "minHeight": 50,
 "width": "25%",
 "minWidth": 50,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "mode": "push",
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg",
 "horizontalAlign": "center",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "borderRadius": 0,
 "height": "75%",
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": false,
 "propagateClick": false,
 "cursor": "hand",
 "maxWidth": 60,
 "data": {
  "name": "X"
 }
},
{
 "maxHeight": 1000,
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Image",
 "borderSize": 0,
 "paddingBottom": 0,
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "minHeight": 1,
 "width": "100%",
 "top": "0%",
 "minWidth": 1,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "height": "100%",
 "borderRadius": 0,
 "shadow": false,
 "paddingTop": 0,
 "scaleMode": "fit_outside",
 "data": {
  "name": "photo"
 },
 "propagateClick": false,
 "maxWidth": 2000
},
{
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "minHeight": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "contentOpaque": false,
 "height": 60,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "horizontalAlign": "right",
 "gap": 0,
 "overflow": "scroll",
 "layout": "horizontal",
 "borderRadius": 0,
 "shadow": false,
 "data": {
  "name": "Container space"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "paddingTop": 20,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingBottom": 30,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "minHeight": 520,
 "width": "100%",
 "scrollBarWidth": 10,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 100,
 "backgroundOpacity": 0.3,
 "horizontalAlign": "left",
 "gap": 10,
 "overflow": "scroll",
 "layout": "vertical",
 "borderRadius": 0,
 "height": "100%",
 "shadow": false,
 "data": {
  "name": "Container text"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "paddingTop": 0,
 "scrollBarColor": "#E73B2C",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.79
},
{
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "minHeight": 1,
 "width": 370,
 "scrollBarWidth": 10,
 "contentOpaque": false,
 "verticalAlign": "top",
 "height": 40,
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "horizontalAlign": "left",
 "gap": 10,
 "overflow": "scroll",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "horizontal",
 "borderRadius": 0,
 "shadow": false,
 "data": {
  "name": "Container space"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 60,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "borderSize": 0,
 "paddingBottom": 0,
 "right": 20,
 "minHeight": 50,
 "width": "100%",
 "top": 20,
 "minWidth": 50,
 "verticalAlign": "top",
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "mode": "push",
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "horizontalAlign": "right",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "borderRadius": 0,
 "height": "36.14%",
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": false,
 "propagateClick": false,
 "cursor": "hand",
 "maxWidth": 60,
 "data": {
  "name": "IconButton X"
 }
},
{
 "maxHeight": 60,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "borderSize": 0,
 "paddingBottom": 0,
 "right": 20,
 "minHeight": 50,
 "width": "100%",
 "top": 20,
 "minWidth": 50,
 "verticalAlign": "top",
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "mode": "push",
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "horizontalAlign": "right",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "borderRadius": 0,
 "height": "36.14%",
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": false,
 "propagateClick": false,
 "cursor": "hand",
 "maxWidth": 60,
 "data": {
  "name": "IconButton X"
 }
},
{
 "playbackBarBottom": 0,
 "toolTipBorderColor": "#767676",
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "paddingLeft": 0,
 "playbackBarHeadOpacity": 1,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "class": "ViewerArea",
 "toolTipShadowBlurRadius": 3,
 "toolTipOpacity": 1,
 "paddingBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "toolTipFontSize": 12,
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "width": "100%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "minHeight": 1,
 "toolTipPaddingBottom": 4,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "transitionDuration": 500,
 "toolTipShadowColor": "#333333",
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "progressBarBorderSize": 0,
 "minWidth": 1,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarProgressBorderColor": "#000000",
 "shadow": false,
 "toolTipFontFamily": "Arial",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "propagateClick": false,
 "progressLeft": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipTextShadowOpacity": 0,
 "playbackBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "displayTooltipInTouchScreens": true,
 "paddingRight": 0,
 "borderSize": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "toolTipFontColor": "#606060",
 "progressBarBackgroundColorDirection": "vertical",
 "transitionMode": "blending",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressRight": 0,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "firstTransitionDuration": 0,
 "progressBottom": 2,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "top": "0%",
 "playbackBarOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipDisplayTime": 600,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "playbackBarLeft": 0,
 "paddingTop": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF"
},
{
 "maxHeight": 60,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "borderSize": 0,
 "paddingBottom": 0,
 "right": 20,
 "minHeight": 50,
 "width": "10%",
 "top": 20,
 "minWidth": 50,
 "verticalAlign": "top",
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "mode": "push",
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "horizontalAlign": "right",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "borderRadius": 0,
 "height": "10%",
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": false,
 "propagateClick": false,
 "cursor": "hand",
 "maxWidth": 60,
 "data": {
  "name": "IconButton X"
 }
},
{
 "maxHeight": 1000,
 "id": "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Image",
 "borderSize": 0,
 "paddingBottom": 0,
 "url": "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
 "minHeight": 1,
 "width": "100%",
 "top": "0%",
 "minWidth": 1,
 "verticalAlign": "bottom",
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "height": "100%",
 "borderRadius": 0,
 "shadow": false,
 "paddingTop": 0,
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image"
 },
 "propagateClick": false,
 "maxWidth": 2000
},
{
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "minHeight": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "contentOpaque": false,
 "height": 60,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "horizontalAlign": "right",
 "gap": 0,
 "overflow": "scroll",
 "layout": "horizontal",
 "borderRadius": 0,
 "shadow": false,
 "data": {
  "name": "Container space"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "paddingTop": 20,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingBottom": 30,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "minHeight": 520,
 "width": "100%",
 "scrollBarWidth": 10,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 100,
 "backgroundOpacity": 0.3,
 "horizontalAlign": "left",
 "gap": 10,
 "overflow": "scroll",
 "layout": "vertical",
 "borderRadius": 0,
 "height": "100%",
 "shadow": false,
 "data": {
  "name": "Container text"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "paddingTop": 0,
 "scrollBarColor": "#E73B2C",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.79
},
{
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "minHeight": 1,
 "width": 370,
 "scrollBarWidth": 10,
 "contentOpaque": false,
 "verticalAlign": "top",
 "height": 40,
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "horizontalAlign": "left",
 "gap": 10,
 "overflow": "scroll",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "horizontal",
 "borderRadius": 0,
 "shadow": false,
 "data": {
  "name": "Container space"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5
},
{
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "paddingLeft": 10,
 "paddingRight": 10,
 "class": "HTMLText",
 "borderSize": 0,
 "paddingBottom": 20,
 "scrollBarMargin": 2,
 "minHeight": 1,
 "width": "100%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "backgroundOpacity": 0,
 "height": "100%",
 "borderRadius": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:7.61vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.64vh;font-family:'Montserrat';\"><B>LOREM IPSUM</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.64vh;font-family:'Montserrat';\"><B>DOLOR SIT AMET</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.76vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:1.76vh;font-family:'Montserrat';\"><B>CONSECTETUR ADIPISCING ELIT. MORBI BIBENDUM PHARETRA LOREM, ACCUMSAN SAN NULLA.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.99vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:0.99vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:0.99vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE=\"margin:0; line-height:1.76vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.76vh;font-family:'Montserrat';\"><B>DONEC FEUGIAT:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.54vh;\"> </SPAN>\u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV><p STYLE=\"margin:0; line-height:1.76vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.76vh;font-family:'Montserrat';\"><B>LOREM IPSUM:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:2.76vh;font-family:'Oswald';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#F7931E",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "HTMLText"
 },
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarOpacity": 0.5
},
{
 "fontFamily": "Montserrat",
 "fontColor": "#FFFFFF",
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "rollOverBackgroundOpacity": 1,
 "paddingLeft": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingRight": 0,
 "class": "Button",
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "minHeight": 1,
 "width": 180,
 "pressedBackgroundColorRatios": [
  0
 ],
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "height": 50,
 "fontSize": "1.96vh",
 "mode": "push",
 "backgroundOpacity": 0.8,
 "minWidth": 1,
 "horizontalAlign": "center",
 "gap": 5,
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#F7931E"
 ],
 "label": "LOREM IPSUM",
 "fontStyle": "normal",
 "borderRadius": 0,
 "layout": "horizontal",
 "shadow": false,
 "data": {
  "name": "Button Lorem Ipsum"
 },
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "paddingTop": 0,
 "fontWeight": "bold",
 "textDecoration": "none",
 "cursor": "hand",
 "iconWidth": 32,
 "pressedBackgroundOpacity": 1
},
{
 "id": "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "HTMLText",
 "borderSize": 0,
 "paddingBottom": 10,
 "scrollBarMargin": 2,
 "minHeight": 1,
 "width": "100%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "backgroundOpacity": 0,
 "height": "45%",
 "borderRadius": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:7.61vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.64vh;font-family:'Montserrat';\"><B>LOREM IPSUM</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.64vh;font-family:'Montserrat';\"><B>DOLOR SIT AMET</B></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#04A3E1",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "HTMLText18899"
 },
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
  "this.HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE"
 ],
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "minHeight": 1,
 "width": "100%",
 "scrollBarWidth": 10,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "backgroundOpacity": 0.3,
 "horizontalAlign": "left",
 "gap": 10,
 "overflow": "scroll",
 "layout": "horizontal",
 "borderRadius": 0,
 "height": "80%",
 "shadow": false,
 "data": {
  "name": "- content"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 200,
 "id": "Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Image",
 "borderSize": 0,
 "paddingBottom": 0,
 "url": "skin/Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0.jpg",
 "minHeight": 1,
 "width": "25%",
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundOpacity": 0,
 "horizontalAlign": "left",
 "height": "100%",
 "borderRadius": 0,
 "shadow": false,
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "agent photo"
 },
 "propagateClick": false,
 "maxWidth": 200
},
{
 "id": "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
 "paddingLeft": 10,
 "paddingRight": 10,
 "class": "HTMLText",
 "borderSize": 0,
 "paddingBottom": 10,
 "scrollBarMargin": 2,
 "minHeight": 1,
 "width": "75%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "backgroundOpacity": 0,
 "height": "100%",
 "borderRadius": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:1.87vh;font-family:'Montserrat';\"><B>JOHN DOE</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.54vh;font-family:'Montserrat';\">LICENSED REAL ESTATE SALESPERSON</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.99vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Montserrat';\">Tlf.: +11 111 111 111</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Montserrat';\">jhondoe@realestate.com</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Montserrat';\">www.loremipsum.com</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.99vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:0.99vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "scrollBarColor": "#F7931E",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarOpacity": 0.5
}],
 "overflow": "visible",
 "horizontalAlign": "left",
 "layout": "absolute",
 "borderRadius": 0,
 "height": "100%",
 "shadow": false,
 "mobileMipmappingEnabled": false,
 "data": {
  "name": "Player468"
 },
 "vrPolyfillScale": 0.5,
 "propagateClick": true,
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "mouseWheelEnabled": true,
 "scrollBarOpacity": 0.5,
 "backgroundPreloadEnabled": true
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
