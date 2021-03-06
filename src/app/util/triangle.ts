import { Coordinate } from './coordinate';

export interface Triangle {
  point1: Coordinate;
  point2: Coordinate;
  point3: Coordinate;
  color: string;
  opacity: string;
}

export function getTriangleMesh(
  screenWidth: number,
  extraWidth: number,
  screenHeight: number,
  length: number,
  epsilon: number,
  color1: string,
  color2: string,
  fadeAmount: number
): Triangle[] {
  const totalWidth = screenWidth + extraWidth;
  const hCells = Math.floor(totalWidth / length);
  const height = length * Math.sqrt(3) / 2;
  const vCells = Math.floor(screenHeight / height) + 1;

  const points: Coordinate[][] = [];
  for (let row = 0; row < vCells; row += 2) {
    points[row] = [];
    points[row + 1] = [];
    for (let col = 0; col < hCells; col++) {
      points[row][col] = {
        x: col * length + chaos(epsilon) - totalWidth,
        y: row * height + chaos(epsilon)
      };
      points[row + 1][col] = {
        x: col * length + length / 2 + chaos(epsilon) - totalWidth,
        y: row * height + height + chaos(epsilon)
      };
    }
  }

  let index = 0;
  const triangles: Triangle[] = [];

  for (let row = 0; row < vCells - 2; row += 2) {
    for (let col = 0; col < hCells - 1; col++) {
      if (isVisible(col, hCells)) {
        triangles[index++] = {
          point1: { ...points[row][col] },
          point2: { ...points[row + 1][col] },
          point3: { ...points[row][col + 1] },
          color: color1,
          opacity: opacity(col, hCells, fadeAmount)
        };
      }
      if (isVisible(col + 1, hCells)) {
        triangles[index++] = {
          point1: { ...points[row + 1][col] },
          point2: { ...points[row + 2][col + 1] },
          point3: { ...points[row + 1][col + 1] },
          color: color1,
          opacity: opacity(col + 1, hCells, fadeAmount)
        };
      }
      if (isVisible(col, hCells)) {
        triangles[index++] = {
          point1: { ...points[row][col + 1] },
          point2: { ...points[row + 1][col] },
          point3: { ...points[row + 1][col + 1] },
          color: color2,
          opacity: opacity(col + 1, hCells, fadeAmount)
        };
      }
      if (isVisible(col + 1, hCells)) {
        triangles[index++] = {
          point1: { ...points[row + 1][col + 1] },
          point2: { ...points[row + 2][col + 1] },
          point3: { ...points[row + 2][col + 2] },
          color: color2,
          opacity: opacity(col + 2, hCells, fadeAmount)
        };
      }
    }
  }

  return triangles;
}

function chaos(epsilon: number): number {
  return (1 - (Math.random() * 2)) * epsilon;
}

function isVisible(col: number, maxCol: number): boolean {
  const middle = maxCol / 2;
  return Math.random() >= Math.abs(col - middle) / middle;
}

function opacity(col: number, maxCol: number, amount: number): string {
  if (col <= amount){
    return (col / amount).toString();
  } else if (maxCol - col <= amount) {
    return ((maxCol - col) / amount).toString();
  } else {
    return '1';
  }
}
