<div id="header" align="center">
  
# Apex Legends Launch Options (Steam & EA App Versions)

</div>
<br>

<div id="navigation" align="center">

| - [Launch options](https://github.com/DominicKlmNL/apex-legends-config/blob/main/launchoptions.md) - | - [In-game settings](https://github.com/DominicKlmNL/apex-legends-config/blob/main/ingame.md) - | - [Autoexec.cfg](https://github.com/DominicKlmNL/apex-legends-config/blob/main/autoexec.cfg) - | - [Videoconfig.txt](https://github.com/DominicKlmNL/apex-legends-config/blob/main/videoconfig.txt) - | - [Nvidia settings](https://github.com/DominicKlmNL/apex-legends-config/blob/main/nvidia-settings.md) - | - [Changelog](./docs/CHANGELOG.md) - | - [License](./LICENSE) - |

</div>
<br>

> [!IMPORTANT]
> Please note that there is a critical difference in the launch options for Steam & the launch options for EA App

<div id="Application">

## How to use this guide

Before this guide will show you how to configure the launch options, it is important to make sure that you use the options corresponding to the application you are using. There is a critical difference in the launch options for Steam & EA App. Make sure you follow the correct guide below. 
You can click the application you are using here:
</div>
<br>

<div id="choose" align="center">

  [Steam](#LOSteam) | [EA App](#LOEAApp) 

</div>
<br>

> [!WARNING]
> This is the guide to set launch options for Steam

<div id="LOSteam" align="left">
<br>

## $\color{blue}\textsf{Steam}$ Launch Options Commands

| Command | Function | Benefit |
| --- | --- | --- |
| -dev | Bypasses the intro cinematic animations when launching the game | It helps you load directly into the main menu faster while also enabling engine-level developer features (like allowing the console to be opened, if supported) |
| -high | Tells your operating system to launch Apex Legends with High CPU priority | It instructs your computer to prioritize the game's processing threads over other background applications. This can stabilize frame rates and potentially reduce stuttering, especially on low-to-mid-range CPUs. |
| +exec | Automatically runs a custom initialization script (e.g. autoexec.cfg) located in your game's directory when Apex Legends boots up. | Players use an autoexec file to force custom settings that aren't available in the in-game menus, such as advanced graphics tweaks for maximum FPS, custom audio profiles, or complex keybinds.  |
| autoexec | The name of the script that you set for the command "+exec" | When using configuration files, you are able to make significant changes that are not possible in the launch options alone. A large number of settings require a seperate config file like "autoexec.cfg" |

<br>
  
<div id="date" align="justify" >

| <sup> Install time required for Steam</sup> |
| :---: |
| <sup> $\color{green}\textsf{Approx. 10 min}$ </sup> |

</div>
<br>

## Playing Apex Legends through Steam, use the settings below

1. Open Steam and go to your <b>Library</b> tab 
2. Right+click <b>Apex Legends</b> 
3. Select <b>"Properties"</b> 
4. Make sure you are on the <b>"General"</b> tab 
5. There is the field called <b>"Launch Options"</b> 
6. Copy the command below and paste it into the <b>Launch Options</b> field 


``` -dev -high +exec autoexec ```


8. Once you pasted the commands in the field, you can close the window and start up Apex Legends. The commands will now take effect.
</div>


### Steam Launch Options Completed

<br><br><br>

> [!WARNING]
> This is the guide to set launch options for the EA App

<div id="LOEAApp" align="left">
<br>

## $\color{orange}\textsf{EA App}$ Launch Options Commands

| Command | Function | Benefit |
| --- | --- | --- |
| -dev | Bypasses the intro cinematic animations when launching the game | It helps you load directly into the main menu faster while also enabling engine-level developer features (like allowing the console to be opened, if supported) |
| -high | Tells your operating system to launch Apex Legends with High CPU priority | It instructs your computer to prioritize the game's processing threads over other background applications. This can stabilize frame rates and potentially reduce stuttering, especially on low-to-mid-range CPUs. |
| -exec | Automatically runs a custom initialization script (e.g. autoexec.cfg) located in your game's directory when Apex Legends boots up. | Players use an autoexec file to force custom settings that aren't available in the in-game menus, such as advanced graphics tweaks for maximum FPS, custom audio profiles, or complex keybinds.  |
| autoexec | The name of the script that you set for the command "+exec" | When using configuration files, you are able to make significant changes that are not possible in the launch options alone. A large number of settings require a seperate config file like "autoexec.cfg" |

<br>

<div id="date" align="justify" >

| <sup> Install time required for EA App</sup> |
| :---: |
| <sup> $\color{green}\textsf{Approx. 10 min}$ </sup> |

</div>
<br>

## Playing Apex Legends through EA Apps, use the settings below

1. Open the EA App on your PC 
2. Go to <b>My collections</b>
3. Click the <b>three dots</b> in the top-right corner of the <b>Apex Legends game tile</b>
4. Select View Properties 
5. Locate the <b>Advanced Launch Options</b> field 
6. Copy the command below and paste it into the <b>Advanced Launch Options</b> field 


``` -dev -high -exec autoexec ```


8. Once you pasted the commands in the field, click <b>Save</b>
</div>
<br>

### EA App Launch Options Completed

<br>

> [!NOTE]
> If you want to start using the autoexec.cfg combined with these commands, make sure to follow the instructions from [README](https://github.com/DominicKlmNL/apex-legends-config/edit/main/README.md) on how to install the configuration.

<br>

<div align="center">
<br>

[Back to Top](#Top)

</div>
