let renderer
let scene
let camera
let mesh
let controls

const init = ()=>{
  // renderer
  renderer = new THREE.WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)

  // scene
  scene = new THREE.Scene()

  // camera
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.z = 15
  controls = new THREE.OrbitControls(camera, renderer.domElement)

  scene.add(camera)

  // geometry
  const geometry = new THREE.BufferGeometry()

  // duplicate top left and bottom right
  // vertices because each vertex needs to appear once per triangle.
  // vertices must be counter clockwise around surface normal
  const vertices = new Float32Array( [
    -2.75, 2.75, 1.0, // 1
    -2.75, 5.5, 1.0,
    -5.5, 5.5, 1.0,

    -5.5, 5.5, 1.0,
    -5.5, 2.75, 1.0,
    -2.75, 2.75, 1.0,

      0, 5.5, 1.0, //2
    -2.75, 5.5,  1.0,
    -2.75,  2.75,  1.0,

    -2.75, 2.75, 1.0,
    0, 2.75, 1.0,
    0, 5.5, 1.0,

    0, 5.5, 1.0, // 3
    0, 2.75, 1.0,
    2.75, 2.75, 1.0,

    2.75, 2.75, 1.0,
    2.75, 5.5, 1.0,
    0, 5.5, 1.0,

    5.5, 5.5, 1.0, // 4
    2.75, 5.5, 1.0,
    2.75, 2.75, 1.0,

    2.75, 2.75, 1.0,
    5.5, 2.75, 1.0,
    5.5, 5.5, 1.0,

    -2.75, 2.75, 1.0, // 5
    -5.5, 2.75, 1.0,
    -5.5, 0, 1.0,

    -5.5, 0, 1.0,
    -2.75, 0,  1.0,
      -2.75,  2.75,  1.0,

    -2.75, 2.75, 1.0, // 6
    -2.75, 0, 1.0,
    0, 0, 1.0,

    0, 0, 1.0,
    0, 2.75, 1.0,
    -2.75, 2.75, 1.0,

    2.75, 2.75, 1.0, // 7
    0, 2.75, 1.0,
    0, 0, 1.0,

    0, 0, 1.0,
    2.75,  0,  1.0,
    2.75, 2.75,  1.0,

    2.75, 2.75,  1.0, //8
    2.75, 0, 1.0,
    5.5, 0, 1.0,

    5.5, 0, 1.0,
    5.5, 2.75, 1.0,
    2.75, 2.75, 1.0,

    -5.5, 0, 1.0, // 9
    -5.5, -2.75, 1.0,
    -2.75, -2.75, 1.0,

    -2.75, -2.75, 1.0,
    -2.75, 0, 1.0,
    -5.5, 0, 1.0,

    0, 0, 1.0, // 10
    -2.75, 0, 1.0,
    -2.75, -2.75, 1.0,

    -2.75, -2.75, 1.0,
    0, -2.75, 1.0,
    0, 0, 1.0,

    0, 0, 1.0, // 11
    0, -2.75, 1.0,
    2.75, -2.75, 1.0,

    2.75, -2.75, 1.0,
    2.75, 0, 1.0,
    0, 0, 1.0,

    5.5, 0, 1.0, // 12
    2.75, 0, 1.0,
    2.75, -2.75, 1.0,

    2.75, -2.75, 1.0,
    5.5, -2.75, 1.0,
    5.5, 0, 1.0,

    -2.75, -2.75, 1.0, // 13
    -5.5, -2.75, 1.0,
    -5.5, -5.5, 1.0,

    -5.5, -5.5, 1.0,
    -2.75, -5.5, 1.0,
    -2.75, -2.75, 1.0,

    -2.75, -2.75, 1.0, // 14
    -2.75, -5.5, 1.0,
    0, -5.5, 1.0,

    0, -5.5, 1.0,
    0, -2.75, 1.0,
    -2.75, -2.75, 1.0,

    2.75, -2.75, 1.0, // 15
    0, -2.75, 1.0,
    0, -5.5, 1.0,

    0, -5.5, 1.0,
    2.75, -5.5, 1.0,
    2.75, -2.75, 1.0,

    2.75, -2.75, 1.0, // 16
    2.75, -5.5, 1.0,
    5.5, -5.5, 1.0,

    5.5, -5.5, 1.0,
    5.5, -2.75, 1.0,
    2.75, -2.75, 1.0,
  ])

  // attributes
  // itemSize = 3 because there are 3 values (components) per vertex
  geometry.addAttribute( 'position', new THREE.BufferAttribute(vertices, 3))

  // material
  const material = new THREE.MeshBasicMaterial({ color: 0xffffff })
  // Trying to use a light absorbing material so that so that the flips are visible
  // const material = new THREE.MeshLambertMaterial({ color: 'red', side: 2, shading: THREE.FlatShading })

  mesh = new THREE.Mesh(geometry, material)
  mesh.material.side = THREE.DoubleSide

  // was thinking that adding shadow would give the look im looking for but nothing is working
  // mesh.castShadow = true
  // mesh.receiveShadow = true

  scene.add(mesh)

  // lighting
  // I know i need a light to actually use a light absorbing material
  // const light = new THREE.DirectionalLight(0xffffff, 2.0, 1000)
  // light.target = mesh
  // scene.add(light)
}

// update positions
const updatePositions = ()=>{
  const positions = mesh.geometry.attributes.position.array

  setTimeout(()=>{
    console.log(':::::::in set setTimeout right:::::')
    flips.topRightCorner(positions)
  }, 3000)

  setTimeout(()=>{
    console.log(':::::::in set setTimeout left:::::')
    flips.bottomLeftCorner(positions)
  }, 2000)

  setTimeout(()=>{
    console.log(':::::::in set setTimeout left:::::')
    flips.topLeftCorner(positions)
  }, 2000)

  setTimeout(()=>{
    console.log(':::::::in set setTimeout left:::::')
    flips.bottomRightCorner(positions)
  }, 2000)

  // helps compare 2 arrays and provides the index and difference
  // bottomRightVertices.forEach((vert, idx) =>
    // positions[idx] !== vert ? console.log('the work for you', idx, vert) : null)
}

// render
const render = ()=>{
  renderer.render(scene, camera)
}

// animate
const animate = () => {

    requestAnimationFrame( animate )

    //if mouse drag starts in top left corner and ends where x and y are less than start
        //then fold corner
    if ( true ) { // currently true for testing purposes
        updatePositions()
        mesh.geometry.attributes.position.needsUpdate = true // required after the first render
    }

  controls.update(camera)
  render()
}

