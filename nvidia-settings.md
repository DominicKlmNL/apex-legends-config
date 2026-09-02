> [!CAUTION]
> These settings only work on computers with NVIDIA videocards and use the NVIDIA Control Panel to configure the videocard.

<div id="header" align="center">
  
# NVIDIA Settings for Apex Legends

<br>

### NVIDIA CONTROL PANEL

 ![NVIDIA Control Panel](https://cdn.lo4d.com/t/icon/128/nvidia-display-control-panel.png) 

</div>
<br>

<div id="Navigation" align="center">

[Setting things up](#Installation) | [Settings](#Settings) | [README](https://github.com/DominicKlmNL/apex-legends-config/blob/main/README.md) | [Launch options](https://github.com/DominicKlmNL/apex-legends-config/blob/main/launchoptions.md)  |  [In-game settings](https://github.com/DominicKlmNL/apex-legends-config/blob/main/ingame.md)  |  [Autoexec.cfg](https://github.com/DominicKlmNL/apex-legends-config/blob/main/autoexec.cfg)  |  [Videoconfig.txt](https://github.com/DominicKlmNL/apex-legends-config/blob/main/videoconfig.txt)  |  [Changelog](https://github.com/DominicKlmNL/apex-legends-config/blob/main/docs/CHANGELOG.md) | [License](https://github.com/DominicKlmNL/apex-legends-config/blob/main/LICENSE)

</div>
<br>
 
<div id="Installation">

## Setting things up ⏲️

<div id="Install">

#### Expected duration: $\color{green}\textsf{approx. 30 min}$ 

</div>
<br>

1. Go to Windows menu
2. Find "NVIDIA Control Panel" and open the program. (The icon looks like the picture at the top of the page)
3. Once NVIDIA Control has started up, go to <b>Manage 3D settings</b>
4. Select the tab <b>Program Settings</b> and find Apex Legends (<i> r5apex_dx12.exe </i>) from the dropdown and select it.
5. If you can not find Apex Legends in the dropdown, click <b>add</b> to select Apex from recent programs.
6. Find the settings in the scroll list that are written in $\color{green}\textsf{table A}$  below and make sure they are on the correct setting.
7. Once you have changed the settings in the <b>Program Settings</b> click on "Apply"
8. Now select the tab <b>Global Settings</b> and change the setting as written in the $\color{red}\textsf{table B}$ .
9. Once you have changed the settings in the  <b>Global Settings</b> click on "Apply"
10. You have now succesfully changed the required NVIDIA settings in the control panel. You can close the control panel and hop on Apex, have fun Legend.

</div>

<div id="Settings">

<br>

## Settings

<p> Before we make changes in your NVIDIA settings, it is important that you understand what those changes are, what their function is and what the benefit is. All the settings that we will be changing are listed below, with corresponding information regarding the function and benefit of changing the setting.</p>

<br>

#### A. Manage 3D settings - Program settings

| Setting | Function | Benefit | Value |
| :--- | --- | --- | :---: |
| <b> Antialiasing - Mode </b> | Leaves edge smoothing entirely up to the game's own graphics menu. | None, already have configure this in-game, so turn this off | <b> Off </b> |
| <b> Ambient Occlusion </b> | Disables driver-level ambient occlusion. This provides the highest frame rates but leaves corners and crevices looking less realistic. | None, already have configure this in-game, so turn this off | <b> Off </b> |
| <b> Low Latency Mode </b> | Automatic optimization through NVIDIA Reflex ON+Boost | Both acceptable, just ensure not to use "Ultra" | <b> On/off </b> |
| <b> Power Management Mode </b> | Dictates how aggressively your graphics card drops its clock speeds to save power when it is not fully loaded. | Forces the graphics card to maintain its highest possible 3D clock speeds whenever a game or 3D application is running, regardless of the actual rendering load. | <b> Prefer Maximum Performance </b> |
| <b> Texture Filtering - Anisotropic sample optimization </b> | Limits the number of texture samples used during anisotropic filtering based on the angle of the surface. | Limits the number of samples on surfaces at specific angles where the visual difference is harder to notice. | <b> On </b> |
| <b> Texture Filtering - Quality </b> | Determines the overall balance between sharp, clear textures and gaming performance. | Aggressively cuts down texture filtering accuracy to squeeze out the maximum possible frame rate. This causes a noticeable drop in visual quality, making textures look blurry, pixelated, or unstable while moving. | <b> High Performance </b> |
| <b> Texture Filtering - Trilinear optimization </b> | improves your gaming performance by allowing the graphics card to use simpler bilinear filtering on parts of a texture where the full, high-quality trilinear filtering isn't necessary. | This reduces the workload on your card and slightly increases your frame rate. This is the recommended default for most users. | <b> On </b> |
| <b> Threaded Optimization </b> | Loadbalances the GPU driver-pipeline over all cores | Better load balance means better performances and less stutter | <b> On </b> |
| <b> Vertical Sync </b> | Synchronizes the frame rate (FPS) of your game with the refresh rate (Hz) of your monitor to prevent the screen from tearing | Disables V-Sync completely. Your graphics card renders frames as fast as it can, minimizing input lag. This is best for fast-paced competitive games, but it causes horizontal lines across the screen called screen tearing. | <b> Off </b> |

<br>

#### B. Manage 3D settings - Global settings

| Setting | Function | Benefit | Value |
| :--- | --- | --- | :---: |
| <b> Shader Cache Size </b> | Controls the maximum amount of disk space the driver may use for storing shader compiles | Apex Legends is heavily shader cache dependent, so to increase the limit available will reduce the load on the GPU | <b>Set to 10GB or higher to your preference </b> |

<br>

</div>


> [!WARNING] 
> The installation guide is step by step with full information about the settings, regardless i would like to emphasize that you have to be certain that you understand what you are changing within NVIDIA. Make sure to backup the old settings before changing the settings according to the installation guide.

<br>

<div align="center">
<br>

[Back to top](#Top)

</div>
