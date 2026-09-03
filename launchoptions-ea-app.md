> [!CAUTION]
> THIS THE GUIDE FOR THE LAUNCH OPTIONS USED IN EA Apps,
> PLEASE FOLLOW THE INSTRUCTIONS [Launch Options: Steam]([launchoptions-steam.md](https://github.com/DominicKlmNL/apex-legends-config/blob/main/launchoptions-steam.md)) IF YOU ARE USING EA APP

<div id="header" align="center">
<br>
  
# Apex Legends EA App Launch Options 

</div>
<br>

<div id="navigation" align="center">

| - [Launch options: Steam](https://github.com/DominicKlmNL/apex-legends-config/blob/main/launchoptions-steam.md) - | - [Launch Options: EA App](https://github.com/DominicKlmNL/apex-legends-config/blob/main/launchoptions-ea-app.md) - | - [In-game settings](https://github.com/DominicKlmNL/apex-legends-config/blob/main/ingame.md) - | - [Autoexec.cfg](https://github.com/DominicKlmNL/apex-legends-config/blob/main/autoexec.cfg) - |  
| - [Videoconfig.txt](https://github.com/DominicKlmNL/apex-legends-config/blob/main/videoconfig.txt) - | - [Nvidia settings](https://github.com/DominicKlmNL/apex-legends-config/blob/main/nvidia-settings.md) - | - [Changelog](./docs/CHANGELOG.md) - | - [License](./LICENSE) - |

</div>
<br>

<div id="Application">

# How to use this guide

Before this guide will show you how to configure the launch options, it is important to make sure that you use the options corresponding to the application you are using. There is a critical difference in the launch options for Steam & EA App. This guideline is specifically for EA App. 

<br> 

<div id="date" align="justify" >

| <sup> Time to complete configuration</sup> |
| :---: |
| <sup> $\color{green}\textsf{Approx. 10 min}$ </sup> |

</div>
<br>

</div>

## Launch Options Commands

| Command | Function | Benefit |
| --- | --- | --- |
| -dev | Bypasses the intro cinematic animations when launching the game | It helps you load directly into the main menu faster while also enabling engine-level developer features (like allowing the console to be opened, if supported) |
| -high | Tells your operating system to launch Apex Legends with High CPU priority | It instructs your computer to prioritize the game's processing threads over other background applications. This can stabilize frame rates and potentially reduce stuttering, especially on low-to-mid-range CPUs. |
| -exec | Automatically runs a custom initialization script (e.g. autoexec.cfg) located in your game's directory when Apex Legends boots up. | Players use an autoexec file to force custom settings that aren't available in the in-game menus, such as advanced graphics tweaks for maximum FPS, custom audio profiles, or complex keybinds.  |
| autoexec | The name of the script that you set for the command "+exec" | When using configuration files, you are able to make significant changes that are not possible in the launch options alone. A large number of settings require a seperate config file like "autoexec.cfg" |

<br>

## Configure the Launch Options into EA Apps

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

> [!NOTE]
> If you want to start using the autoexec.cfg combined with these commands, make sure to follow the instructions from [README](https://github.com/DominicKlmNL/apex-legends-config/edit/main/README.md) on how to install the configuration.

<br>

<div align="center">
<br>

[Back to Top](#Top)

</div>
