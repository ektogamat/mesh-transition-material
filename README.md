# MeshTransitionMaterial

Created by Anderson Mancini 2024

#### What it is?

This component is a replacement material for react three fiber that makes a smooth color transition when a change in the "transitionColor" property is detected.

#### How to use it?

All you need to do is import the material and replace your mesh's material with the <TransitionMaterial /> of your choice [1, 2 or 3]. We have 3 options, each of them applying a nice effect when the color is changed.

See an example:

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

#### Dependencies

You need CSM (three-custom-shader-material) to use this material, which requires latest version of Threejs, React Three Fiber and Drei.

#### Using the example

Install node.js

```
yarn
yarn dev
```

#### Questions?

If you have any questions, please reach me on my [website](https://andersonmancini.dev). I will be updating this component with more features in the future. I might take a while to answer so please be patient ;).
