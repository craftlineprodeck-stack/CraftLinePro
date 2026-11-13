import { formatMonth, getMaterialName, getProjectPlace } from '@/lib/content';
import type { Project } from '@/data/types';

// Case format line: city · material · area · days (cards and case header).
export function projectFactsLine(project: Project): string {
  const parts = [getProjectPlace(project.city).name, project.materials.map(getMaterialName).join(', ')];
  if (project.areaSqFt) parts.push(`${project.areaApprox ? '~' : ''}${project.areaSqFt} sq ft`);
  if (project.days) parts.push(`${project.days} ${project.days === 1 ? 'day' : 'days'}`);
  return parts.join(' · ');
}

export function projectCompleted(project: Project): string {
  return formatMonth(project.completed);
}
