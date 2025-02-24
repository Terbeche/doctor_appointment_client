import DoctorForm from '@/components/forms/DoctorForm';
import DashboardLayout from '@/components/layout/DashboardLayout';

export default function AddDoctorPage() {
  return (
    <DashboardLayout>
      <DoctorForm />
    </DashboardLayout>
  );
}