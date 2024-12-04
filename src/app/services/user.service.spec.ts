import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';
import { Storage } from '@ionic/storage-angular';
import { AuthService } from './auth.service';
import { DatePipe } from '@angular/common';

describe('UserService', () => {
  let userService: UserService;
  let storageMock: jasmine.SpyObj<Storage>;
  let authServiceMock: jasmine.SpyObj<AuthService>;

  beforeEach(async () => {
    const storageSpy = jasmine.createSpyObj('Storage', ['create', 'get', 'set', 'remove', 'clear']);
    const authServiceSpy = jasmine.createSpyObj('AuthService', ['login', 'logout']);

    await TestBed.configureTestingModule({
      providers: [
        UserService,
        DatePipe,
        { provide: Storage, useValue: storageSpy },
        { provide: AuthService, useValue: authServiceSpy },
      ],
    }).compileComponents();

    userService = TestBed.inject(UserService);
    storageMock = TestBed.inject(Storage) as jasmine.SpyObj<Storage>;
    authServiceMock = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
  });

  it('debería inicializar el storage correctamente', async () => {
    storageMock.create.and.returnValue(Promise.resolve(storageMock));
    await userService.init();
    expect(storageMock.create).toHaveBeenCalled();
  });

  it('debería establecer el usuario actual correctamente', async () => {
    storageMock.set.and.returnValue(Promise.resolve());
    userService.setUsuarioActual('testUser');
    expect(storageMock.set).toHaveBeenCalledWith('usuarioActual', 'testUser');
  });

  it('debería verificar que un usuario no existe', async () => {
    storageMock.get.and.returnValue(Promise.resolve([]));
    const result = await userService.VerificarUsuario('newUser');
    expect(result).toBeTrue();
  });

  it('debería crear un nuevo usuario', async () => {
    storageMock.get.and.returnValue(Promise.resolve([]));
    storageMock.set.and.returnValue(Promise.resolve());
    const result = await userService.CrearUsuario({ nombre: 'newUser', contraseña: '1234' });
    expect(result).toBeTrue();
    expect(storageMock.set).toHaveBeenCalledWith('usuarios', jasmine.any(Array));
  });

  it('debería iniciar sesión correctamente', async () => {
    const mockUsers = [{ nombre: 'testUser', contraseña: '1234' }];
    storageMock.get.and.returnValue(Promise.resolve(mockUsers));
    authServiceMock.login.and.stub();

    const result = await userService.Iniciarsesion('testUser', '1234');
    expect(result).toBeTrue();
    expect(authServiceMock.login).toHaveBeenCalledWith('token');
    expect(storageMock.set).toHaveBeenCalledWith('usuarioActual', 'testUser');
  });
});
