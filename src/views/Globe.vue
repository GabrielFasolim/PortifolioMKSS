<template>
  <div ref="globeContainer" class="globe-container"></div>
</template>

<script>
import * as THREE from "three";

export default {
  name: "NetworkGlobe",
  mounted() {
    this.initGlobe();
  },
  methods: {
    initGlobe() {
      const container = this.$refs.globeContainer;

      // Tamanho do container
      const width = container.clientWidth || window.innerWidth;
      const height = container.clientHeight || 600;

      // Cena, câmera e renderizador
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
      camera.position.z = 390;

      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(width, height);
      container.appendChild(renderer.domElement);

      // Adicionar esferas como pontos principais
      const pointsGroup = new THREE.Group();
      const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x002285 }); // Novo tom de azul
      const largeSphereMaterial = new THREE.MeshBasicMaterial({
        color: 0x002285, // Novo tom de azul
        transparent: true,
        opacity: 0.9,
      });

      // Função para adicionar pontos esféricos
      const addPoint = (size, material) => {
        const sphere = new THREE.Mesh(new THREE.SphereGeometry(size, 16, 16), material);
        const phi = Math.random() * Math.PI * 2; // Ângulo em torno do eixo Y
        const theta = Math.acos(Math.random() * 2 - 1); // Ângulo em torno do eixo Z

        // Calculando as coordenadas em uma esfera de raio 140 (tamanho ajustável)
        const radius = 140; // Define o tamanho do globo
        sphere.position.set(
          radius * Math.sin(theta) * Math.cos(phi),
          radius * Math.sin(theta) * Math.sin(phi),
          radius * Math.cos(theta)
        );
        pointsGroup.add(sphere);
      };

      // Adiciona pontos principais e menores
      for (let i = 0; i < 40; i++) { // Ajuste para menos pontos
        addPoint(2, sphereMaterial); // Pontos menores
      }

      for (let i = 0; i < 10; i++) { // Ajuste para menos pontos principais
        addPoint(4, largeSphereMaterial); // Pontos principais
      }

      scene.add(pointsGroup);

      // Linhas conectando os pontos (opcional, caso deseje)
      const lineMaterial = new THREE.LineBasicMaterial({
        color: 0x002285, // Novo tom de azul
        opacity: 0.5,
        transparent: true,
      });

      const lineGeometry = new THREE.BufferGeometry();
      const positions = [];

      pointsGroup.children.forEach((point, idx) => {
        if (idx % 3 === 0) {
          positions.push(point.position.x, point.position.y, point.position.z);
        }
      });

      lineGeometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(positions, 3)
      );

      const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
      scene.add(lines);

      // Animação
      const animate = () => {
        requestAnimationFrame(animate);

        // Rotação dos elementos
        pointsGroup.rotation.y += 0.0015;
        lines.rotation.y += 0.0015;

        renderer.render(scene, camera);
      };

      animate();

      // Ajuste de tela
      window.addEventListener("resize", () => {
        const newWidth = container.clientWidth || window.innerWidth;
        const newHeight = container.clientHeight || 600;

        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
      });
    },
  },
};
</script>

<style scoped>
.globe-container {
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  overflow: visible;
}
</style>
