<div id="header" align="center">
  
# Apex Legends Launch Options

</div>
<br>

<div id="navigation" align="center">

[Installation](#Launchoptions)  |  [Launch options](https://github.com/DominicKlmNL/apex-legends-config/blob/main/launchoptions.md)  |  [In-game settings](https://github.com/DominicKlmNL/apex-legends-config/blob/main/ingame.md)  |  [Autoexec.cfg](https://github.com/DominicKlmNL/apex-legends-config/blob/main/autoexec.cfg)  |  [Videoconfig.txt](https://github.com/DominicKlmNL/apex-legends-config/blob/main/videoconfig.txt)  |  [Nvidia settings](https://github.com/DominicKlmNL/apex-legends-config/blob/main/nvidia-settings.md)  |  [Changelog](./docs/CHANGELOG.md)  |  [License](./LICENSE)

</div>
<br>

<div id="Commands">

## Commands

<p>Before you install the launch options below, it is important that you understand what the commands do and what they mean. All launch options are in the table down below including their function</p>

<br>

| Command | Function | Benefit |
| --- | --- | --- |
| -dev | Bypasses the intro cinematic animations when launching the game | It helps you load directly into the main menu faster while also enabling engine-level developer features (like allowing the console to be opened, if supported) |
| -high | Tells your operating system to launch Apex Legends with High CPU priority | It instructs your computer to prioritize the game's processing threads over other background applications. This can stabilize frame rates and potentially reduce stuttering, especially on low-to-mid-range CPUs. |
| +exec | Automatically runs a custom initialization script (e.g. autoexec.cfg) located in your game's directory when Apex Legends boots up. | Players use an autoexec file to force custom settings that aren't available in the in-game menus, such as advanced graphics tweaks for maximum FPS, custom audio profiles, or complex keybinds.  |
| autoexec | The name of the script that you set for the command "+exec" | When using configuration files, you are able to make significant changes that are not possible in the launch options alone. A large number of settings require a seperate config file like "autoexec.cfg" |
  
</div>

<br>

<div id="Launchoptions" align="left">

## Setting things up 🕐


<div id="Install">

#### Expected duration: $\color{green}\textsf{approx. 5 min}$ 

</div>


1. Open Steam and go to your <b>Library</b> tab 
2. Right+click <b>Apex Legends</b> 
3. Select <b>"Properties"</b> 
4. Make sure you are on the <b>"General"</b> tab 
5. There is the field called <b>"Launch Options"</b> 
6. Copy the command below and paste it into the <b>Launch Options</b> field 


``` -dev -high +exec autoexec ```


8. Once you pasted the commands in the field, you can close the window and start up Apex Legends. The commands will now take effect.
<br>

</div>

> [!NOTE]
> If you want to start using the autoexec.cfg combined with these commands, make sure to follow the instructions from [README](https://github.com/DominicKlmNL/apex-legends-config/edit/main/README.md) on how to install the configuration.

<br>

<div align="center">
<br>

[Back to Top](#Top)

</div>
