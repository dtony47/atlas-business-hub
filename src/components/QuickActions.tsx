import { Button } from "@/components/ui/button";
import { Plus, Download, Filter } from "lucide-react";
import { toast } from "sonner";

interface QuickActionsProps {
  onAddNew?: () => void;
  onExport?: () => void;
  onFilter?: () => void;
  addLabel?: string;
}

export function QuickActions({ onAddNew, onExport, onFilter, addLabel = "Add New" }: QuickActionsProps) {
  const handleExport = () => {
    toast.success("Export started", {
      description: "Your data will be downloaded shortly",
    });
    onExport?.();
  };

  const handleFilter = () => {
    toast.info("Filters coming soon", {
      description: "Advanced filtering options will be available soon",
    });
    onFilter?.();
  };

  return (
    <div className="flex gap-2 flex-wrap">
      {onAddNew && (
        <Button
          onClick={onAddNew}
          className="gap-2 hover-lift"
        >
          <Plus className="h-4 w-4" />
          {addLabel}
        </Button>
      )}
      {onExport && (
        <Button
          variant="outline"
          onClick={handleExport}
          className="gap-2 hover-lift"
        >
          <Download className="h-4 w-4" />
          Export
        </Button>
      )}
      {onFilter && (
        <Button
          variant="outline"
          onClick={handleFilter}
          className="gap-2 hover-lift"
        >
          <Filter className="h-4 w-4" />
          Filter
        </Button>
      )}
    </div>
  );
}
