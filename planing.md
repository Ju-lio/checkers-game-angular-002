class TabuleiroService {
    private _tabuleiro;
    private eventEmmiter = new EventEmmiter<Position>();

    sendPosition(position: Position) {
        this.eventEmmiter.emit(position);
    }

    getPosition(){
        return this.eventEmmiter;
    }
}


class TabuleiroComponent {
    ngOnInit() {
        this.tabuleiroService.getPosition().subscribe({
            next: (position: Position) => {
                console.log("[position]", position);
            }
        })
    }
}