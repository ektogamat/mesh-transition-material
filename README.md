# MeshTransitionMaterial

Created by Anderson Mancini 2024

![MeshTransitionMaterial in action](/public/img_preview_1.png)

#### What it is?

This component is a replacement material for react three fiber that makes a smooth color transition when a change in the "transitionColor" property is detected.

[Action Video](https://youtu.be/0upCVT8kkW8?si=bd_KYXcSFJol43ko)
[Live Link Demo](https://mesh-transition-material.vercel.app/)
[Buy Now](https://www.patreon.com/andersonmancini/shop/meshtransitionmaterial-for-react-three-121382?source=storefront)

<hr />

#### How to use it?

All you need to do is import the material and replace your mesh's material with the <TransitionMaterial /> of your choice [1, 2 or 3]. We have 3 options, each of them applying a nice effect when the color is changed.

<div align="center">
  <img src="/public/img_preview_2.png" width="32%" />
  <img src="/public/img_preview_3.png" width="32%" /> 
  <img src="/public/img_preview_4.png" width="32%" />
</div>
<hr />
See a code example:

```
import TransitionMaterial1 from '/MeshTransitionMaterial/MeshTransitionMaterial1'

<mesh>
  <boxGeometry />
  <TransitionMaterial1 transitionColor={'red'} />
</mesh>
```

This material uses the 'transitionColor' property to trigger shader effects. In the example, the color is changed when you click on the html elements. I'm using a valtio store to control the selected color and passing this selected color as transitionColor prop. You can change the color in any other way you see fit. The component will read the previous transition color and smoothly transition to the new one.

The base of the custom material will always be a MeshPhysicalMaterial. You can change the material type to any other type of your choice supported by Threejs: "meshStandardMaterial", "meshPhongMaterial", etc. This can be done by changing the material type on line 34 of "MeshTransitionMaterial" file. You can also controls other things like transitionDuration, etc. I'm not exposing those props because I think we need a good number to work with. But if you are experienced enough, you can change that.

The base material allows you to use any of the properties of the original materials.

`<TransitionMaterial roughness={0.2} transitionColor={'red} />`

This will transfer the roughness property to the material that is being applied to your mesh.

<hr />

#### Dependencies

You need CSM (three-custom-shader-material) to use this material, which requires latest version of Threejs, React Three Fiber and Drei.

<hr />

#### Using the example

Install node.js

```
yarn
yarn dev
```

<hr />

#### Questions?

If you have any questions, please reach me on my [website](https://andersonmancini.dev). I will be updating this component with more features in the future. I might take a while to answer so please be patient ;).

#### Why is this paid?

Since I started my journey, I have always created all my components for free. After providing free code for a long time, I realized that it is difficult to keep the code updated without a recurring source of income that allows me to create updates and notify users when updates happen. That is why I have set a price for this component. This is so that I can keep the code updated, provide support and have your contact information when new updates happen.
